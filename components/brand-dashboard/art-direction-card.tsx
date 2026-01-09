"use client"

import { Camera, Shapes } from "lucide-react"
import { GlassSection } from "./glass-section"

interface ArtDirectionCardProps {
  title: string
  description: string
  photography: string
  graphics: string
  primaryColor: string
  onExpand?: () => void
}

export function ArtDirectionCard({
  title,
  description,
  photography,
  graphics,
  primaryColor,
  onExpand,
}: ArtDirectionCardProps) {
  return (
    <GlassSection
      icon={<Camera className="w-5 h-5" />}
      title="Art Direction"
      expandable
      onExpand={onExpand}
      accentColor={primaryColor}
    >
      <h4 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>
        {title}
      </h4>
      <p className="text-sm text-white/60 leading-relaxed mb-5">{description}</p>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
          <div className="flex items-center gap-2 mb-2">
            <Camera className="w-4 h-4 text-white/40" />
            <span className="text-xs font-medium text-white/40">Photography</span>
          </div>
          <p className="text-sm text-white/70 line-clamp-2">{photography}</p>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
          <div className="flex items-center gap-2 mb-2">
            <Shapes className="w-4 h-4 text-white/40" />
            <span className="text-xs font-medium text-white/40">Graphics</span>
          </div>
          <p className="text-sm text-white/70 line-clamp-2">{graphics}</p>
        </div>
      </div>
    </GlassSection>
  )
}
