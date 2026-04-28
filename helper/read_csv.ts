import fs from "fs";
import path from "path";
import pkg from "csv-parse/sync"; // cambios aquí
const { parse } = (pkg as any);

export function readCSV(filePath: string) {
    const resolvedPath = path.resolve(filePath);
    const csvDataStr = fs.readFileSync(resolvedPath, { encoding: "utf-8" });

    const records = parse(csvDataStr, {
        columns: true,
        skip_empty_lines: true,
        trim: true
    }) as Record<string, string>[];

    return records;
}
