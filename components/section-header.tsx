import type { LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  icon: LucideIcon
  title: string
  className?: string
}

export function SectionHeader({ icon: Icon, title, className }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Icon className="w-4 h-4 text-muted-foreground" />
      <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">{title}</span>
    </div>
  )
}
