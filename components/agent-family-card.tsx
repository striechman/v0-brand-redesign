import { GlassCard } from "./glass-card"
import { SectionHeader } from "./section-header"
import { Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Agent {
  name: string
  role: string
  icon: LucideIcon
}

interface AgentFamilyCardProps {
  agents: Agent[]
}

export function AgentFamilyCard({ agents }: AgentFamilyCardProps) {
  return (
    <GlassCard className="p-6">
      <SectionHeader icon={Users} title="Agent Family" className="mb-2" />
      <p className="text-sm text-muted-foreground mb-4">
        {agents.length} specialized agent types derived from your brand DNA
      </p>

      <div className="grid grid-cols-4 gap-3">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-2">
              <agent.icon className="w-5 h-5 text-white/70" />
            </div>
            <span className="text-sm font-medium text-white">{agent.role}</span>
            <span className="text-xs text-muted-foreground">{agent.name}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
