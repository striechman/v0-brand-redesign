"use client"

import { ArrowLeft, RotateCcw, Play } from "lucide-react"

interface BrandHeroProps {
  brandName: string
  archetype: string
  tagline: string
  logoUrl?: string
  primaryColor: string
  secondaryColor?: string
}

export function BrandHero({ brandName, archetype, tagline, logoUrl, primaryColor, secondaryColor }: BrandHeroProps) {
  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 relative z-10">
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] transition-all">
            <ArrowLeft className="w-5 h-5 text-white/70" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-white">{brandName}</h1>
            <p className="text-sm text-white/50">Brand Analysis</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] text-white/70 hover:bg-white/[0.1] transition-all">
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm">Regenerate</span>
          </button>
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-white transition-all hover:scale-[1.02]"
            style={{
              background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor || primaryColor} 100%)`,
              boxShadow: `0 4px 20px ${primaryColor}66`,
            }}
          >
            <Play className="w-4 h-4" />
            <span>Start Simulation</span>
          </button>
        </div>
      </div>

      {/* Hero Card */}
      <div
        className="mx-4 mt-2 p-6 rounded-3xl relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}40 0%, ${secondaryColor || primaryColor}20 100%)`,
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-40"
          style={{ background: primaryColor }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full blur-3xl opacity-30"
          style={{ background: secondaryColor || primaryColor }}
        />

        <div className="relative flex items-center gap-6">
          {/* Logo */}
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center backdrop-blur-xl"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {logoUrl ? (
              <img src={logoUrl || "/placeholder.svg"} alt={brandName} className="w-16 h-16 object-contain" />
            ) : (
              <span className="text-3xl font-bold text-white">{brandName.charAt(0)}</span>
            )}
          </div>

          {/* Brand Info */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">{brandName}</h2>
            <p className="text-lg text-white/80">
              <span className="font-medium">{archetype}</span>
              <span className="mx-2 text-white/40">•</span>
              <span className="text-white/60">{tagline}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
