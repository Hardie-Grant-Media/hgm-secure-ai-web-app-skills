import { createFileRoute } from "@tanstack/react-router"

import { WorkflowPage } from "@/pages/workflow-page"

export const Route = createFileRoute("/")({ component: WorkflowPage })
