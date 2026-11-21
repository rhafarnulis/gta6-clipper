// Clip entry for the gta6-clipper-01 bounty.
// Copies VIDEO.json from the repository root into the output directory.
// The house reads the video itself through the YouTube Data API; this
// program only hands over the JSON file that names the video.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "VIDEO.json"), join(outDir, "VIDEO.json"));
