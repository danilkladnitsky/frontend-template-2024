import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { configDefaults } from "vitest/config"

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./tests/setup.ts",
        include: ["tests/**/*.test.ts", "tests/**/*.test.tsx"],
        exclude: [...configDefaults.exclude]
    }
})
