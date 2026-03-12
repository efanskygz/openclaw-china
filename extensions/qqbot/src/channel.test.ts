import { describe, expect, it } from "vitest";
import { qqbotPlugin } from "./channel.js";

describe("qqbotPlugin capabilities", () => {
  it("declares direct, group, and channel chat types", () => {
    expect(qqbotPlugin.capabilities.chatTypes).toEqual(["direct", "group", "channel"]);
  });
});
