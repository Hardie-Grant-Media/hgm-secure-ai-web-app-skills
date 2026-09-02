import { copyFileSync, mkdirSync } from "node:fs"
import path from "node:path"

const distributionDirectory = path.resolve(import.meta.dirname, "../dist")
const applicationEntryPoint = path.join(distributionDirectory, "index.html")
const directRoutes = [
  ["examples", "brandlens"],
  ["principles", "negative-space-programming"],
]

for (const routeParts of directRoutes) {
  const routeDirectory = path.join(distributionDirectory, ...routeParts)
  mkdirSync(routeDirectory, { recursive: true })
  copyFileSync(applicationEntryPoint, path.join(routeDirectory, "index.html"))
}

console.log(
  `Created direct-load entry points for ${directRoutes.length} routes.`
)
