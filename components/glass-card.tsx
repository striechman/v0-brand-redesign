import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "strong" | "glow"
}

export function GlassCard({ children, className, variant = "default" }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        variant === "default" && "glass hover:bg-white/[0.05]",
        variant === "strong" && "glass-strong hover:bg-white/[0.08]",
        variant === "glow" && "glass glow-pink hover:bg-white/[0.05]",
        className,
      )}
    >
      {children}
    </div>
  )
}
