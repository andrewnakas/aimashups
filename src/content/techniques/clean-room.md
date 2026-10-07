---
name: Clean-room mashup
summary: Mechanics re-implemented from observed behaviour and documented values, with original code and original assets. Needs no game files at all.
order: 4
---
A clean-room mashup doesn't touch the original games' code or data. Instead, a **spec** is written from observation: how fast a push accelerates a board, how long a kickflip takes, at what angle a landing turns into a bail. Original code is then written against that spec, and every asset is made new.

Game mechanics, physics constants and controls feel can't be copyrighted, but code, art, sound and level data can. A clean-room mashup only reproduces the former. That's why it can be hosted on a website and played instantly in a browser, on any device, with nothing to install and no game files.

[GameMash](/play/gamemash/), the playable mashup on this site, is built this way: eight modes written from published specs in Rust and Bevy, compiled to WebAssembly. Read the [clean-room policy](/about/clean-room/).
