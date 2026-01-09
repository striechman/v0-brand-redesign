"use client"

import { ChevronRight } from "lucide-react"
import type { ReactNode } from "react"

interface GlassSectionProps {
  icon?: ReactNode
  title: string
  subtitle?: string
  children: ReactNode
  expandable?: boolean
  onExpand?: () => void
  accentColor?: string
}

export function GlassSection({
  icon,
  title,
  subtitle,
  children,
  expandable = false,
  onExpand,
  accentColor,
}: GlassSectionProps) {
  return (
    <div
      className="rounded-2xl p-5 transition-all"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: accentColor ? `${accentColor}20` : "rgba(255,255,255,0.08)",
                color: accentColor || "rgba(255,255,255,0.7)",
              }}
            >
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{title}</h3>
            {subtitle && <p className="text-xs text-white/40 mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {expandable && (
          <button
            onClick={onExpand}
            className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition-all"
          >
            <ChevronRight className="w-4 h-4 text-white/50" />
          </button>
        )}
      </div>
      {children}
    </div>
  )
}
