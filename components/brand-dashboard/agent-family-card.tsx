"use client"

import { Users, Headphones, TrendingUp, CreditCard, Heart, AlertTriangle } from "lucide-react"
import { GlassSection } from "./glass-section"

interface Agent {
  id: string
  name: string
  role: string
  icon: "core" | "tech" | "sales" | "billing" | "retention" | "escalation"
}

interface AgentFamilyCardProps {
  agents: Agent[]
  primaryColor: string
  onAgentSelect?: (agent: Agent) => void
  onExpand?: () => void
}

const iconMap = {
  core: Users,
  tech: Headphones,
  sales: TrendingUp,
  billing: CreditCard,
  retention: Heart,
  escalation: AlertTriangle,
}

export function AgentFamilyCard({ agents, primaryColor, onAgentSelect, onExpand }: AgentFamilyCardProps) {
  return (
    <GlassSection
      icon={<Users className="w-5 h-5" />}
      title="Agent Family"
      subtitle={`${agents.length} specialized agents`}
      expandable
      onExpand={onExpand}
    >
      <div className="grid grid-cols-3 gap-3">
        {agents.map((agent) => {
          const Icon = iconMap[agent.icon]
          return (
            <button
              key={agent.id}
              onClick={() => onAgentSelect?.(agent)}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all text-center"
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: `${primaryColor}15` }}
              >
                <Icon className="w-6 h-6" style={{ color: primaryColor }} />
              </div>
              <p className="text-sm font-medium text-white">{agent.role}</p>
              <p className="text-xs text-white/40 mt-0.5">{agent.name}</p>
            </button>
          )
        })}
      </div>
    </GlassSection>
  )
}
