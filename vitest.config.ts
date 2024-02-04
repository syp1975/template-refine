import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.{test,vitest}.?(c|m)[jt]s?(x)"],
  },
});
