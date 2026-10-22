import { describe, expect, it } from "vitest";
import { greet } from "./greeting";
import { whisper } from "./whisper";

describe("whisper", () => {
  it("whispers the greeting for the given name", () => {
    expect(whisper("Ada")).toBe("hello, ada!");
  });

  it("falls back to world for a blank name", () => {
    expect(whisper("  ")).toBe("hello, world!");
  });

  it("equals the lower-cased greeting", () => {
    for (const name of ["Ada", "grace hopper", "  Linus  ", "", "Zoë"]) {
      expect(whisper(name)).toBe(greet(name).toLowerCase());
    }
  });
});
