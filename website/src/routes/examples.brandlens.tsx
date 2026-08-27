import { createFileRoute } from "@tanstack/react-router"

import { BrandlensCaseStudyPage } from "@/pages/brandlens-case-study-page"

export const Route = createFileRoute("/examples/brandlens")({
  component: BrandlensCaseStudyPage,
})
