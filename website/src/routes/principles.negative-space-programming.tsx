import { createFileRoute } from "@tanstack/react-router"

import { NegativeSpaceProgrammingPage } from "@/pages/negative-space-programming-page"

export const Route = createFileRoute("/principles/negative-space-programming")({
  component: NegativeSpaceProgrammingPage,
})
