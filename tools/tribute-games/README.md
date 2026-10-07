# Tribute game generator

The standalone tribute games (Blockrealm, Hollow Warden, Night Swing, Kickflip Ops, Block City) share one engine snapshot: GameMash commit `390cf8e`, which has the realm and arena worlds, raiders, the boss and night lighting. `make_game.py` copies that snapshot and locks it into one game: fixed modes, world and time of day; a controls screen instead of the mode mixer; its own title, page, crate name, CI and smoke test; and a README.

```sh
mkdir base && git -C ~/Documents/GameMash archive 390cf8e | tar -x -C base
python3 make_game.py blockrealm          # writes out/blockrealm
./push_game.sh blockrealm "description"  # creates the repo, pushes in three chunks, enables Pages
./patch_file.sh <repo> <path> <file> "message"   # one-file fix through the GitHub API, no clone
```

Each game then evolves in its own repo. Fixes to the shared engine must be applied to each repo separately.
