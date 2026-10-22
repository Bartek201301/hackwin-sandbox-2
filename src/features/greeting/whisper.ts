import { greet } from "./greeting";

export function whisper(name: string): string {
  return greet(name).toLowerCase();
}
