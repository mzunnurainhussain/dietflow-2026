import fs from "fs";
import path from "path";
import Papa from "papaparse";

export function loadCsv<T = any>(relativePath: string): T[] {
  const fullPath = path.join(process.cwd(), relativePath);
  const file = fs.readFileSync(fullPath, "utf8");
  const parsed = Papa.parse<T>(file, { header: true, skipEmptyLines: true });
  return (parsed.data as any[]).filter(Boolean) as T[];
}
