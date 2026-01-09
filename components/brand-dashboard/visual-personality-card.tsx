"use client"

import { Sliders } from "lucide-react"
import { GlassSection } from "./glass-section"

interface PersonalitySlider {
  leftLabel: string
  rightLabel: string
  value: number // 0-100
}

interface VisualPersonalityCardProps {
  sliders: PersonalitySlider[]
  primaryColor: string
  onExpand?: () => void
}

export function VisualPersonalityCard({ sliders, primaryColor, onExpand }: VisualPersonalityCardProps) {
  return (
    <GlassSection icon={<Sliders className="w-5 h-5" />} title="Visual Personality" expandable onExpand={onExpand}>
      <div className="space-y-4">
        {sliders.map((slider, index) => (
          <div key={index}>
            <div className="flex justify-between text-xs text-white/50 mb-2">
              <span>{slider.leftLabel}</span>
              <span>{slider.rightLabel}</span>
            </div>
            <div className="relative h-2 bg-white/[0.08] rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-full transition-all"
                style={{
                  width: `${slider.value}%`,
                  background: `linear-gradient(90deg, ${primaryColor} 0%, ${primaryColor}80 100%)`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassSection>
  )
}
