"use client"

import { Palette, Check } from "lucide-react"
import { GlassSection } from "./glass-section"

interface Color {
  hex: string
  type: string
  selected?: boolean
}

interface ColorPaletteCardProps {
  colors: Color[]
  onColorSelect?: (color: Color) => void
  onExpand?: () => void
}

export function ColorPaletteCard({ colors, onColorSelect, onExpand }: ColorPaletteCardProps) {
  return (
    <GlassSection icon={<Palette className="w-5 h-5" />} title="Color Palette" expandable onExpand={onExpand}>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {colors.map((color, index) => {
          const isLight = isLightColor(color.hex)
          return (
            <button
              key={index}
              onClick={() => onColorSelect?.(color)}
              className="relative flex-shrink-0 w-20 h-28 rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95"
              style={{ background: color.hex }}
            >
              {color.selected && (
                <div
                  className={`absolute top-2 right-2 w-6 h-6 rounded-md flex items-center justify-center ${
                    isLight ? "bg-black/20" : "bg-white/20"
                  }`}
                >
                  <Check className={`w-4 h-4 ${isLight ? "text-black" : "text-white"}`} />
                </div>
              )}
              <span
                className={`absolute bottom-2 left-2 text-xs font-mono ${isLight ? "text-black/70" : "text-white/70"}`}
              >
                {color.hex}
              </span>
            </button>
          )
        })}
      </div>
    </GlassSection>
  )
}

function isLightColor(hex: string): boolean {
  const c = hex.substring(1)
  const rgb = Number.parseInt(c, 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = (rgb >> 0) & 0xff
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luma > 160
}
