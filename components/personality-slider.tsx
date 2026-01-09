import { GlassCard } from "./glass-card"
import { SectionHeader } from "./section-header"
import { Fingerprint } from "lucide-react"

interface PersonalityTrait {
  leftLabel: string
  rightLabel: string
  value: number // 0-100
}

interface PersonalitySliderProps {
  traits: PersonalityTrait[]
}

export function PersonalitySlider({ traits }: PersonalitySliderProps) {
  return (
    <GlassCard className="p-6">
      <SectionHeader icon={Fingerprint} title="Visual Personality" className="mb-6" />

      <div className="space-y-5">
        {traits.map((trait, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/70">{trait.leftLabel}</span>
              <span className="text-white/70">{trait.rightLabel}</span>
            </div>
            <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  width: `${trait.value}%`,
                  background: "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
