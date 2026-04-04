import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const cli = join(__dirname, "..", "dist", "index.js");

function runCli(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [cli, ...args], {
      env: { ...process.env, HOME: "/nonexistent-home-for-cli-test" },
    });
    let stderr = "";
    child.stderr?.on("data", (c) => {
      stderr += c.toString();
    });
    child.on("error", reject);
    child.on("close", (code) => resolve({ code, stderr }));
  });
}

const { code, stderr } = await runCli(["data-sources", "types", "sdfsfd"]);

assert.notEqual(
  stderr.includes("ERR_PARSE_ARGS_UNEXPECTED_POSITIONAL"),
  true,
  "should not throw parseArgs unexpected positional",
);
assert.equal(
  stderr.includes("Not authenticated"),
  true,
  "expected auth error when no credentials",
);
assert.equal(code, 1);
