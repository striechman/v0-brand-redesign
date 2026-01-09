"use client"

import { User, RefreshCw } from "lucide-react"
import { GlassSection } from "./glass-section"
import { AosIcon } from "../aos-icon"

interface AgentPersonaCardProps {
  name: string
  description: string
  avatarUrl?: string
  traits: string[]
  primaryColor: string
  onExpand?: () => void
  onRegenerate?: () => void
}

export function AgentPersonaCard({
  name,
  description,
  avatarUrl,
  traits,
  primaryColor,
  onExpand,
  onRegenerate,
}: AgentPersonaCardProps) {
  return (
    <GlassSection
      icon={<User className="w-5 h-5" />}
      title="AI Agent Identity"
      expandable
      onExpand={onExpand}
      accentColor={primaryColor}
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="relative">
          {avatarUrl ? (
            <img
              src={avatarUrl || "/placeholder.svg"}
              alt={name}
              className="w-20 h-20 rounded-2xl object-cover"
              style={{ border: `2px solid ${primaryColor}40` }}
            />
          ) : (
            <div className="w-20 h-20 rounded-2xl overflow-hidden">
              <AosIcon variant="single" color="cyan" size={80} />
            </div>
          )}
          <button
            onClick={onRegenerate}
            className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-[#0a0a0b] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] transition-all"
          >
            <RefreshCw className="w-4 h-4 text-white/60" />
          </button>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h4 className="text-xl font-bold text-white mb-1">{name}</h4>
          <p className="text-sm text-white/50 mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {traits.map((trait, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.08] text-white/70 border border-white/[0.08]"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </GlassSection>
  )
}
