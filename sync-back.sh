#!/bin/sh
set -e

SRC="/workspaces/"
DST="/workspaces_host/"
BACKUP="/workspaces_host/.rsync-backup/$(date +%Y%m%d-%H%M%S)"

echo "[sync-back] container → host"
echo "[sync-back] backup dir: $BACKUP"

mkdir -p "$BACKUP"

rsync -a --delete --backup --backup-dir="$BACKUP" \
  --exclude-from=/workspaces_host/.rsyncignore \
  "$SRC" "$DST"

echo "[sync-back] done"
