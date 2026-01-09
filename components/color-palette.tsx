import { GlassCard } from "./glass-card"
import { SectionHeader } from "./section-header"
import { Palette } from "lucide-react"

interface Color {
  hex: string
  name?: string
}

interface ColorPaletteProps {
  colors: Color[]
}

export function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <GlassCard className="p-6">
      <SectionHeader icon={Palette} title="Color Palette" className="mb-4" />

      <div className="flex gap-3">
        {colors.map((color, index) => (
          <div key={index} className="flex-1">
            <div
              className="aspect-square rounded-xl mb-2 ring-1 ring-white/10"
              style={{ backgroundColor: color.hex }}
            />
            <p className="text-xs text-center text-muted-foreground font-mono">{color.hex}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
