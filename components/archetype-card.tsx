import { GlassCard } from "./glass-card"
import { SectionHeader } from "./section-header"
import { Crown } from "lucide-react"

interface ArchetypeCardProps {
  primary: string
  primaryPercent: number
  secondary?: string
  secondaryPercent?: number
}

export function ArchetypeCard({ primary, primaryPercent, secondary, secondaryPercent }: ArchetypeCardProps) {
  return (
    <GlassCard className="p-6">
      <SectionHeader icon={Crown} title="Brand Archetype" className="mb-4" />

      <div className="flex items-center gap-4">
        {/* Donut Chart */}
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            {/* Background circle */}
            <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
            {/* Primary segment */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#e91e8c"
              strokeWidth="4"
              strokeDasharray={`${primaryPercent * 0.88} 100`}
              strokeLinecap="round"
            />
            {/* Secondary segment */}
            {secondary && secondaryPercent && (
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="4"
                strokeDasharray={`${secondaryPercent * 0.88} 100`}
                strokeDashoffset={`-${primaryPercent * 0.88}`}
                strokeLinecap="round"
              />
            )}
          </svg>
        </div>

        {/* Labels */}
        <div>
          <h3 className="text-2xl font-bold text-white">{primary}</h3>
          <p className="text-muted-foreground">{primaryPercent}% dominant</p>
          {secondary && (
            <p className="text-sm text-primary mt-1">
              + {secondary} ({secondaryPercent}%)
            </p>
          )}
        </div>
      </div>
    </GlassCard>
  )
}
