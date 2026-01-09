import { GlassCard } from "./glass-card"
import { SectionHeader } from "./section-header"
import { Camera } from "lucide-react"

interface ArtDirectionCardProps {
  title: string
  description: string
  photography?: string
  graphics?: string
}

export function ArtDirectionCard({ title, description, photography, graphics }: ArtDirectionCardProps) {
  return (
    <GlassCard className="p-6">
      <SectionHeader icon={Camera} title="Art Direction" className="mb-4" />

      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

      <div className="grid grid-cols-2 gap-4">
        {photography && (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-sm font-medium text-white/80">Photography</span>
            </div>
            <p className="text-xs text-muted-foreground">{photography}</p>
          </div>
        )}
        {graphics && (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="text-sm font-medium text-white/80">Graphics</span>
            </div>
            <p className="text-xs text-muted-foreground">{graphics}</p>
          </div>
        )}
      </div>
    </GlassCard>
  )
}
