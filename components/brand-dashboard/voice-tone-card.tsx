"use client"

import { MessageSquare, Quote } from "lucide-react"
import { GlassSection } from "./glass-section"

interface VoiceToneCardProps {
  keywords: string[]
  sampleMessage: string
  primaryColor: string
  onExpand?: () => void
}

export function VoiceToneCard({ keywords, sampleMessage, primaryColor, onExpand }: VoiceToneCardProps) {
  return (
    <GlassSection
      icon={<MessageSquare className="w-5 h-5" />}
      title="Voice & Tone"
      expandable
      onExpand={onExpand}
      accentColor={primaryColor}
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="px-3 py-1.5 rounded-lg text-sm font-medium"
            style={{
              background: `${primaryColor}20`,
              color: primaryColor,
              border: `1px solid ${primaryColor}30`,
            }}
          >
            {keyword}
          </span>
        ))}
      </div>
      <div className="flex gap-3 items-start p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
        <Quote className="w-4 h-4 text-white/30 flex-shrink-0 mt-1" />
        <p className="text-sm text-white/60 italic leading-relaxed">{sampleMessage}</p>
      </div>
    </GlassSection>
  )
}
