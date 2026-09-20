#!/bin/sh
set -e
ROOT=$(CDPATH= cd -- "$(dirname "$0")/.." && pwd)

if [ ! -x "$ROOT/.venv/bin/rendercv" ]; then
  python3 -m venv "$ROOT/.venv"
  "$ROOT/.venv/bin/pip" install -r "$ROOT/cv/requirements.txt"
fi

mkdir -p "$ROOT/public/cv"
"$ROOT/.venv/bin/rendercv" render "$ROOT/cv/Alejandro_Dopico-Castro_CV.yaml" --pdf-path "$ROOT/cv/cv.pdf"
cp "$ROOT/cv/cv.pdf" "$ROOT/public/cv/cv.pdf"
