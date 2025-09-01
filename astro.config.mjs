// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), react(), db()],
  adapter: node({ mode: "standalone" }),
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
});