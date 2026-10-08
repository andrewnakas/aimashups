#!/usr/bin/env bash
# Push a generated game repo in three smaller commits (code, light assets, models) with retries,
# so one flaky upload doesn't sink a 60 MB push. Usage: push_game.sh <repo> "<description>"
set -uo pipefail
r=$1
desc=$2
dir="$(dirname "$0")/out/$r"
cd "$dir" || exit 1

gh repo view "andrewnakas/$r" >/dev/null 2>&1 || gh repo create "andrewnakas/$r" --public --description "$desc" --homepage "https://aigamemashups.com/play/$r/" >/dev/null || exit 1

rm -rf .git
git init -q -b main
git config http.postBuffer 524288000
git remote add origin "https://github.com/andrewnakas/$r.git"

push() {
  for i in 1 2 3 4 5 6 7 8; do
    git push -q -u origin main 2>&1 | tail -2 && git ls-remote --exit-code origin main >/dev/null 2>&1 && [ "$(git ls-remote origin main | cut -f1)" = "$(git rev-parse HEAD)" ] && return 0
    echo "  push attempt $i failed; retrying"
    sleep $((i * 20))
  done
  return 1
}

git add -A -- . ':!assets'
git commit -qm "$r: standalone clean-room tribute game (code)"
push || exit 1
git add assets/CREDITS.md assets/sky assets/sounds assets/textures
git commit -qm "Assets: textures, sky, sounds (CC0 / CC-BY, see assets/CREDITS.md)"
push || exit 1
git add -A
git commit -qm "Assets: characters, animations and props (CC0, see assets/CREDITS.md)"
push || exit 1

gh api -X POST "repos/andrewnakas/$r/pages" -f build_type=workflow --jq .html_url 2>/dev/null || echo "  pages: already enabled"
echo "== $r pushed"
