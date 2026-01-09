"use client"

import { Crown } from "lucide-react"
import { GlassSection } from "./glass-section"

interface ArchetypeCardProps {
  primary: { name: string; percentage: number }
  secondary?: { name: string; percentage: number }
  primaryColor: string
  onExpand?: () => void
}

export function ArchetypeCard({ primary, secondary, primaryColor, onExpand }: ArchetypeCardProps) {
  return (
    <GlassSection
      icon={<Crown className="w-5 h-5" />}
      title="Brand Archetype"
      expandable
      onExpand={onExpand}
      accentColor={primaryColor}
    >
      <div className="flex items-center gap-5">
        {/* Donut Chart */}
        <div className="relative w-24 h-24 flex-shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            {/* Background circle */}
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
            {/* Primary arc */}
            <circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke={primaryColor}
              strokeWidth="3"
              strokeDasharray={`${primary.percentage} ${100 - primary.percentage}`}
              strokeLinecap="round"
            />
            {/* Secondary arc */}
            {secondary && (
              <circle
                cx="18"
                cy="18"
                r="15.5"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="3"
                strokeDasharray={`${secondary.percentage} ${100 - secondary.percentage}`}
                strokeDashoffset={`-${primary.percentage}`}
                strokeLinecap="round"
              />
            )}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-white">{primary.percentage}%</span>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-white mb-1">{primary.name}</h4>
          <p className="text-sm text-white/50">{primary.percentage}% dominant</p>
          {secondary && (
            <p className="text-sm mt-2" style={{ color: primaryColor }}>
              + {secondary.name} ({secondary.percentage}%)
            </p>
          )}
        </div>
      </div>
    </GlassSection>
  )
}
