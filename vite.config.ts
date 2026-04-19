import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/Wedan/",
  plugins: [react()],
  publicDir: "public"
})
