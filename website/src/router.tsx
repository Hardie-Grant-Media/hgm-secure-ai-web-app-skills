import { createBrowserHistory, createRouter } from "@tanstack/react-router"

import { routeTree } from "./routeTree.gen"

export const router = createRouter({
  routeTree,
  history: createBrowserHistory(),
  basepath: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
