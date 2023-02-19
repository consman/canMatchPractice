import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "i5cpsk",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"http://127.0.0.1:4200",
    projectId:"i5cpsk"
  },
});
