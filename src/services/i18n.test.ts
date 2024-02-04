import fs from "fs";
import path from "path";
import i18n from "./i18n";
import { describe, it, expect } from "vitest";
import Handlebars from "handlebars";

describe("i18n locales", () => {
  const languages = i18n.languages;
  const namespaces: readonly string[] = i18n.options.ns
    ? Array.isArray(i18n.options.ns)
      ? i18n.options.ns
      : [i18n.options.ns]
    : [];
  const { loadPath } = i18n.options.backend as { loadPath: string };
  const template = Handlebars.compile(loadPath);
  languages.forEach((lang) => {
    namespaces.forEach((ns) => {
      const filePath = path.join("public", template({ lng: lang, ns: ns }));
      it(`${filePath} should exist`, () => {
        const fileExists = fs.existsSync(filePath);
        expect(fileExists).toBe(true);
      });
    });
  });
});
