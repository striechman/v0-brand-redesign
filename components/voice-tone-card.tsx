import { GlassCard } from "./glass-card"
import { SectionHeader } from "./section-header"
import { MessageSquare, Quote } from "lucide-react"

interface VoiceToneCardProps {
  traits: string[]
  sampleMessage?: string
}

export function VoiceToneCard({ traits, sampleMessage }: VoiceToneCardProps) {
  return (
    <GlassCard className="p-6">
      <SectionHeader icon={MessageSquare} title="Voice & Tone" className="mb-4" />

      {/* Trait Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {traits.map((trait, index) => (
          <span
            key={index}
            className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-white/80"
          >
            {trait}
          </span>
        ))}
      </div>

      {/* Sample Message */}
      {sampleMessage && (
        <div className="flex gap-2 items-start text-muted-foreground">
          <Quote className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <p className="text-sm italic">{sampleMessage}</p>
        </div>
      )}
    </GlassCard>
  )
}
