"use client"

import type * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const ChartContainer = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <div className={`relative ${className}`}>{children}</div>
}

const Chart = ({ type }: { type: "line" | "bar" | "pie" }) => {
  return <></>
}

const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <div>Tooltip Content</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const ChartTooltipContent = () => {
  return <div>Chart Data</div>
}

const ChartLegend = () => {
  return <div></div>
}

export { Chart, ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend }
