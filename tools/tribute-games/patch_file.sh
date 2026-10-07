#!/usr/bin/env bash
# Update one file in a repo through the GitHub contents API (no clone/push). Usage: patch_file.sh <repo> <path> <local-file> <message>
r=$1; path=$2; file=$3; msg=$4
sha=$(gh api "repos/andrewnakas/$r/contents/$path" --jq .sha)
gh api -X PUT "repos/andrewnakas/$r/contents/$path" -f message="$msg" -f content="$(base64 -i "$file")" -f sha="$sha" --jq '.commit.sha[:7]'
