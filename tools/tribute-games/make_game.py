#!/usr/bin/env python3
"""Turn the engine snapshot in ./base into a standalone, locked tribute game repo.

usage: make_game.py <config-name>   (configs below)
Writes ./out/<repo>, ready to `git init` and push.
"""
import json
import re
import shutil
import sys
from pathlib import Path

HERE = Path(__file__).parent
BASE = HERE / "base"

GAMES = {
    "blockrealm": dict(
        repo="blockrealm",
        crate="blockrealm",
        title="Blockrealm",
        tagline="A block-builder in an open-world RPG: mine, build and fight raiders across a voxel countryside.",
        modes=["Blocks"],
        world="Realm",
        night=False,
        smoke_want="BLOCKS",
        smoke_world="Realm",
        help=[
            "LMB: break blocks, or hit a raider in reach.  RMB: place.  Scroll: block type.  T: TNT.",
            "Melee: short reach, a swing cooldown, more knock-back when sprinting, critical hits while falling.",
            "Raiders guard the villages and the keep. Step back out of their wind-up.",
        ],
        tribute=("SkyCraft (Minecraft in Skyrim) by chasmlol", "https://github.com/chasmlol/SkyCraft"),
        site_slug="blockrealm",
        about="""Blockrealm puts a block-sandbox player into an open-world fantasy RPG. The whole countryside is blocks: rolling hills, a river, three villages of timber huts and a stone keep on the central hill, all of which you can dig through, build on or blow up with TNT. Raiders roam the villages and the keep; they spot you, close in and swing, and you fight back with block-game melee.""",
        specs=["realm.md"],
    ),
    "hollow-warden": dict(
        repo="hollow-warden",
        crate="hollow_warden",
        title="Hollow Warden",
        tagline="A 3D platformer hero against a soulslike boss: jump its sweeps, break its posture, spin-throw it.",
        modes=["Jump"],
        world="Arena",
        night=False,
        smoke_want="JUMP",
        smoke_world="Arena",
        help=[
            "Space: jump (chain for double/triple).  Ctrl: crouch / ground pound.  Ctrl+Space: long jump or backflip.  F: punch / dive.",
            "Jump the Warden's sweep, hop its shockwave, sidestep its charge. It gets faster below half health.",
            "Punches, dives, ground pounds and head stomps fill its posture. When it kneels, press E to grab, spin and throw it.",
            "Coins around the ring refill one wedge of your eight-wedge meter.",
        ],
        tribute=("ER Mario (Mario in Elden Ring) by deltarooo", "https://github.com/deltarooo/er-mario"),
        site_slug="hollow-warden",
        about="""Hollow Warden pits a 3D platformer hero, with triple jumps, long jumps, wall kicks, dives and ground pounds, against a soulslike boss in a ruined arena. The Warden telegraphs a sweep you jump over, a leap slam whose shockwave you hop, and a charge you sidestep. Land hits to break its posture, then grab it, spin it around and throw it.""",
        specs=["jump.md", "arena.md"],
    ),
    "night-swing": dict(
        repo="night-swing",
        crate="night_swing",
        title="Night Swing",
        tagline="Web-swing through a moonlit city, steal cars out of the air and lose the police in the dark.",
        modes=["Streets", "Swing"],
        world="City",
        night=True,
        smoke_want="STREETS, SWING",
        smoke_world="City (night)",
        help=[
            "Q: hold to web-swing, release to fling.  Z: tether two objects.",
            "E: steal a car (do it within 2.5 s of a swing release for an AERIAL JACK).  W/S drive, A/D steer, Space handbrake.",
            "Crime raises your wanted level. Swing over roadblocks and lose the police in the dark.",
        ],
        tribute=("ArkWeb (Spider-Man's web-swinging in Arkham Knight) by luki-1", "https://github.com/luki-1/ArkWeb"),
        site_slug="night-swing",
        about="""Night Swing is web-swinging through a city after dark. Swing off any building or lamp post, fling off the release, steal cars straight out of the air, and lose the police in streets lit only by the moon and the lamps.""",
        specs=[],
    ),
    "kickflip-ops": dict(
        repo="kickflip-ops",
        crate="kickflip_ops",
        title="Kickflip Ops",
        tagline="A military shooter where you can drop onto a skateboard any time, in a city with a block quarry you can dig and build.",
        modes=["Skate", "Warfare", "Blocks"],
        world="City",
        night=False,
        smoke_want="SKATE, WARFARE, BLOCKS",
        smoke_world="City",
        help=[
            "G: hop on or off the board.  On the board: W push, Space ollie (hold to charge), J/K/L/U/H flips, Y grab.",
            "LMB fire, RMB aim, R reload, 1-3 weapons, 5/6/7 killstreaks.  4: blocks (LMB break, RMB place, T TNT).",
            "A kill within 1.5 s of a trick scores <TRICK> KILL. Explosions carve the block quarry; rail blocks are grindable.",
        ],
        tribute=("the 2010 Rust Rewrite Mashup (MW2, Skate 3 and Minecraft) by chasmlol", "https://github.com/chasmlol/2010-rust-rewrite-mashup"),
        site_slug="kickflip-ops",
        about="""Kickflip Ops is a military shooter you can skate. Drop onto a board mid-firefight, kickflip over cover and land a KICKFLIP KILL, then dig into the block quarry for cover or blow it apart with TNT and airstrikes. Bots patrol, flank and shoot back; killstreaks earn a UAV, a care package and an airstrike.""",
        specs=["skate.md"],
    ),
    "block-city": dict(
        repo="block-city",
        crate="block_city",
        title="Block City",
        tagline="An open-world crime city with a block-sandbox layer: steal cars, dig, build and blow up the streets.",
        modes=["Streets", "Blocks"],
        world="City",
        night=False,
        smoke_want="STREETS, BLOCKS",
        smoke_world="City",
        help=[
            "E: steal a car.  W/S drive, A/D steer, Space handbrake.",
            "4: blocks.  LMB break, RMB place, scroll block type, T TNT.",
            "TNT carves the city's block layer and wrecks cars. Wall off a street to stop a chase, or dig in while your wanted level climbs.",
        ],
        tribute=("the Minecraft-in-GTA V mods made with universal-modder by Rehan Sheikh", "https://github.com/rehan-remade/universal-modder"),
        site_slug="block-city",
        about="""Block City drops a block-sandbox player into an open-world crime city. Steal cars, rack up a wanted level and outrun the police, then dig into the quarry, build walls across the streets or blow everything up with TNT.""",
        specs=[],
    ),
}


def rep(path: Path, old: str, new: str, count: int = 1):
    s = path.read_text()
    if old not in s:
        raise SystemExit(f"{path}: pattern not found: {old[:80]!r}")
    path.write_text(s.replace(old, new, count))


def sub(path: Path, pattern: str, new: str):
    s = path.read_text()
    s2, n = re.subn(pattern, new, s, count=1, flags=re.S)
    if n != 1:
        raise SystemExit(f"{path}: regex not found: {pattern[:80]!r}")
    path.write_text(s2)


def main(name: str):
    g = GAMES[name]
    out = HERE / "out" / g["repo"]
    if out.exists():
        shutil.rmtree(out)
    shutil.copytree(BASE, out)
    src = out / "src"

    # 1. The game's identity.
    modes = ", ".join(f"Mode::{m}" for m in g["modes"])
    help_lines = "\n".join(f"    {json.dumps(l)}," for l in g["help"])
    (src / "core" / "game.rs").write_text(f'''//! What this game is. Its modes, world and time of day are fixed.

use crate::core::modes::Mode;
use crate::core::scene::World;

pub const TITLE: &str = "{g["title"]}";
pub const TAGLINE: &str = "{g["tagline"]}";
pub const MODES: &[Mode] = &[{modes}];
pub const WORLD: World = World::{g["world"]};
pub const NIGHT: bool = {str(g["night"]).lower()};
/// Shown on the controls screen (Tab), after the movement basics.
pub const HELP: &[&str] = &[
{help_lines}
];

pub fn mask() -> u8 {{
    MODES.iter().fold(0, |m, x| m | x.bit())
}}
''')
    rep(src / "core" / "mod.rs", "pub mod fx;\n", "pub mod fx;\npub mod game;\n")

    # 2. Modes are locked to the game's set: no hotkeys, no presets, nothing else can switch on.
    m = src / "core" / "modes.rs"
    sub(m, r"let pinned = crate::core::scene::startup_world\(\)\.pinned\(\);\s*let start = startup_modes\(\)\.map\(ActiveModes\)\.unwrap_or_default\(\);\s*app\.insert_resource\(ActiveModes\(start\.0 \| pinned\)\)",
        "app.insert_resource(ActiveModes(crate::core::game::mask()))")
    rep(m, "(hotkeys, pin_world_modes, announce_changes).chain()", "(lock_modes, announce_changes).chain()")
    sub(m, r"/// Modes the current world depends on stay on.*?\n}\n", """/// This game's modes are fixed.
fn lock_modes(mut modes: ResMut<ActiveModes>) {
    let want = crate::core::game::mask();
    if modes.0 != want {
        modes.0 = want;
    }
}
""")
    sub(m, r"fn hotkeys\(.*?\n}\n\n", "")

    # 3. World and time of day come from the game, not the URL.
    sc = src / "core" / "scene.rs"
    sub(sc, r"pub fn startup_world\(\) -> World \{.*?\n}\n", "pub fn startup_world() -> World {\n    crate::core::game::WORLD\n}\n")
    sub(sc, r"pub fn night\(\) -> bool \{.*?\n}\n", "pub fn night() -> bool {\n    crate::core::game::NIGHT\n}\n")
    sub(sc, r"fn launch_param\(.*?\n}\n\n", "")

    # 4. HUD and the Tab screen: controls, not a mode mixer.
    ui = src / "core" / "ui.rs"
    rep(ui, "use crate::core::modes::{ActiveModes, Mode, PRESETS};", "use crate::core::modes::{ActiveModes, Mode};")
    rep(ui, "//! Mash panel (Tab) and the HUD.", "//! Controls screen (Tab) and the HUD.")
    sub(ui, r"    // Mode chips\..*?\n    }\);\n\n", """    egui::Area::new(egui::Id::new("chips")).anchor(egui::Align2::CENTER_BOTTOM, [0.0, -12.0]).show(ctx, |ui| {
        ui.label(egui::RichText::new("Tab: controls").size(12.0).color(egui::Color32::from_gray(200)));
    });
    let _ = &modes;

""")
    sub(ui, r"fn panel_ui\(.*\Z", """fn panel_ui(mut contexts: EguiContexts, mut open: ResMut<PanelOpen>, p: Res<PlayerState>) -> Result {
    if !open.0 {
        return Ok(());
    }
    let ctx = contexts.ctx_mut()?;
    let screen = ctx.content_rect();
    let width = (screen.width() - 90.0).clamp(260.0, 640.0);
    let game = crate::core::game::TITLE.to_uppercase();
    egui::Window::new(game.as_str())
        .collapsible(false)
        .resizable(false)
        .anchor(egui::Align2::CENTER_CENTER, [0.0, 0.0])
        .fixed_size([width, (screen.height() - 60.0).max(200.0)])
        .show(ctx, |ui| {
            egui::ScrollArea::vertical().max_height((screen.height() - 120.0).max(160.0)).show(ui, |ui| {
                ui.label(egui::RichText::new(crate::core::game::TAGLINE).size(15.0));
                ui.add_space(8.0);
                ui.label(egui::RichText::new("WASD move.  Space jump.  Shift sprint.  Mouse look.  V first/third person.  Esc frees the mouse.").size(12.5));
                for m in crate::core::game::MODES {
                    ui.add(egui::Label::new(egui::RichText::new(m.controls()).size(12.0).color(egui::Color32::from_gray(200))).wrap());
                }
                ui.add_space(6.0);
                for line in crate::core::game::HELP {
                    ui.add(egui::Label::new(*line).wrap());
                }
                if p.loco == Loco::Vehicle {
                    ui.label("In a car: E to get out.");
                }
                ui.add_space(8.0);
                if ui.button(egui::RichText::new("PLAY  (Tab)").size(18.0).strong()).clicked() {
                    open.0 = false;
                }
                ui.label(egui::RichText::new("A clean-room tribute: original code and CC0 assets. No code, assets or names from the games that inspired it.").size(10.0).color(egui::Color32::from_gray(150)));
            });
        });
    Ok(())
}
""")
    s = ui.read_text()
    if "ActiveModes" in s and "modes: Res<ActiveModes>" not in s:
        pass

    # 5. Names: window, crate, pages.
    rep(src / "main.rs", 'title: "GameMash".into()', "title: crate::core::game::TITLE.into()")
    rep(src / "main.rs", "//! GameMash: eight game mechanics in one world, toggled live in any combination.", f"//! {g['title']}: {g['tagline']}")
    rep(out / "Cargo.toml", 'name = "gamemash"', f'name = "{g["crate"]}"')
    rep(out / "Cargo.lock", 'name = "gamemash"', f'name = "{g["crate"]}"')
    for html in ["index.html", "index-gpu.html"]:
        h = out / html
        rep(h, 'data-bin="gamemash"', f'data-bin="{g["crate"]}"')
        sub(h, r"<title>.*?</title>", f"<title>{g['title']}</title>")
        sub(h, r'<meta name="description" content=".*?" />', f'<meta name="description" content="{g["tagline"]}" />')
        sub(h, r"<h1>GAME<span>MASH</span></h1>", f"<h1>{g['title'].upper()}</h1>")
        sub(h, r"<p>8 mechanics, one city\..*?</p>", f"<p>{g['tagline']}  Tab: controls.</p>")
        sub(h, r"<footer>All mechanics are original clean-room recreations.*?<br>", f'<footer>A clean-room tribute to {g["tribute"][0]}: original code, no game files, names or likenesses. Not affiliated with any publisher. <a href="https://aigamemashups.com/play/{g["site_slug"]}/">aigamemashups.com</a><br>')
    sub(out / "web" / "loader.html", r"<title>.*?</title>", f"<title>{g['title']}</title>")

    # 6. CI: the site is the game at the Pages root; packages named after the game.
    ci = out / ".github" / "workflows" / "ci.yml"
    s = ci.read_text()
    s = s.replace("""      - name: Stage site (game served under /gamemash/)
        run: |
          mkdir -p site/gamemash
          cp -r dist/. site/gamemash/
          printf '<meta http-equiv="refresh" content="0; url=gamemash/">' > site/index.html
          touch site/.nojekyll""", """      - name: Stage site
        run: |
          cp -r dist site
          touch site/.nojekyll""")
    s = s.replace("bin: gamemash.exe", f"bin: {g['crate']}.exe").replace("bin: gamemash }", f"bin: {g['crate']} }}")
    s = s.replace("gamemash", g["repo"])
    ci.write_text(s)
    sm = out / ".github" / "workflows" / "smoke.yml"
    s = sm.read_text()
    s = re.sub(r"        include:\n(          - .*\n)+", f"        include:\n          - {{ want: '{g['smoke_want']}', world: '{g['smoke_world']}' }}\n", s)
    s = s.replace("URL: https://andrewnakas.github.io/GameMash/gamemash/gl/?${{ matrix.query }}&panel=0", f"URL: https://andrewnakas.github.io/{g['repo']}/gl/?panel=0")
    sm.write_text(s)

    # 7. Docs.
    for f in (out / "docs" / "specs").iterdir():
        if f.name not in g["specs"]:
            f.unlink()
    credits = (out / "assets" / "CREDITS.md").read_text().split("\n", 2)[2]
    (out / "README.md").write_text(f"""# {g['title']}

{g['tagline']}

**Play in your browser:** https://andrewnakas.github.io/{g['repo']}/ · [aigamemashups.com/play/{g['site_slug']}/](https://aigamemashups.com/play/{g['site_slug']}/)

{g['about']}

## A clean-room tribute
{g['title']} is a tribute to [{g['tribute'][0]}]({g['tribute'][1]}), one of the most-starred AI game mashups. That project runs on the original games and needs your own copies. This one recreates the mechanics from observed behaviour and published values, with original code and CC0 assets, so it runs in a browser with nothing to install and no game files. It isn't affiliated with the original project or with any publisher. See `docs/specs/` for the behaviour specs.

## Run
```sh
cargo run                      # native
cargo test                     # sims and rules
trunk serve --release          # web build at http://127.0.0.1:8080
```
CI (`.github/workflows/ci.yml`) tests, builds the WebGL2 and WebGPU web builds, publishes them to GitHub Pages, and builds Windows, macOS and Linux releases for `v*` tags. A headless-browser smoke test (`smoke.yml`) loads the published build after every deploy.

Built in Rust on [Bevy](https://bevyengine.org) and Rapier, sharing its engine with [GameMash](https://github.com/andrewnakas/GameMash).

## Asset credits
{credits}""")
    print(f"wrote {out}")


if __name__ == "__main__":
    main(sys.argv[1])
