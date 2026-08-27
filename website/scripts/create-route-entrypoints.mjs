import { copyFileSync, mkdirSync } from "node:fs"
import path from "node:path"

const distributionDirectory = path.resolve(import.meta.dirname, "../dist")
const applicationEntryPoint = path.join(distributionDirectory, "index.html")
const brandlensDirectory = path.join(
  distributionDirectory,
  "examples",
  "brandlens"
)

mkdirSync(brandlensDirectory, { recursive: true })
copyFileSync(applicationEntryPoint, path.join(brandlensDirectory, "index.html"))

console.log("Created direct-load entry point for /examples/brandlens.")
