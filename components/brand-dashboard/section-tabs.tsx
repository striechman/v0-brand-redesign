"use client"
import { Eye, MessageSquare, Users, Palette } from "lucide-react"

interface SectionTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: "visual", label: "Visual Identity", icon: Eye },
  { id: "voice", label: "Tone & Voice", icon: MessageSquare },
  { id: "agent", label: "AI Agent", icon: Users },
  { id: "gallery", label: "Gallery", icon: Palette },
]

export function SectionTabs({ activeTab, onTabChange }: SectionTabsProps) {
  return (
    <div className="flex gap-2 px-4 py-4 overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl whitespace-nowrap transition-all ${
              isActive
                ? "bg-white/[0.12] text-white border border-white/[0.15]"
                : "bg-white/[0.03] text-white/50 border border-white/[0.05] hover:bg-white/[0.08] hover:text-white/70"
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
