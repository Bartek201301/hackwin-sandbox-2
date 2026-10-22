import { describe, expect, it } from "vitest";
import { greet } from "./greeting";
import { shout } from "./shout";

describe("shout", () => {
  it("shouts the greeting for the given name", () => {
    expect(shout("Ada")).toBe("HELLO, ADA!");
  });

  it("falls back to world for a blank name", () => {
    expect(shout("  ")).toBe("HELLO, WORLD!");
  });

  it("equals the upper-cased greeting", () => {
    for (const name of ["Ada", "grace hopper", "  Linus  ", "", "Zoë"]) {
      expect(shout(name)).toBe(greet(name).toUpperCase());
    }
  });
});
