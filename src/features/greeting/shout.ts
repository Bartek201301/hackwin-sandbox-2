import { greet } from "./greeting";

export function shout(name: string): string {
  return greet(name).toUpperCase();
}
