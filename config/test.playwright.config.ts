import { defineConfig, devices } from "@playwright/test";
import { baseConfig } from "../playwright.config.ts";
import { EnvConfig } from "../helper/config-fixtures.ts";
import path from "path";

console.log(`----LOADING TEST ENV SETTINGS----`);

expxort default defineConfig<EnvConfig>({
    ...baseConfig //Loads all the existing config values ...
    testDir: path.resolve(process.cwd(), "./tests"),
    use: {
        envName: "test", 
        appURL: "https://ketalon-demo-cura.herokuapp.com",
        dbConfig: {
            server: "",
            dbname: "",
            connectionString: "",
        },
    },
}):