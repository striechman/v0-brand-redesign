import { GlassCard } from "./glass-card"

interface BrandHeroProps {
  brandName: string
  brandLogo?: string
  archetype: string
  tagline: string
  primaryColor?: string
  secondaryColor?: string
}

export function BrandHero({
  brandName,
  brandLogo,
  archetype,
  tagline,
  primaryColor = "#e91e8c",
  secondaryColor = "#8b5cf6",
}: BrandHeroProps) {
  return (
    <GlassCard className="relative overflow-hidden p-8">
      {/* Internal gradient blob */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-40"
        style={{
          background: `radial-gradient(circle, ${primaryColor} 0%, ${secondaryColor} 50%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex items-center gap-6">
        {/* Logo */}
        <div className="w-20 h-20 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
          {brandLogo ? (
            <img src={brandLogo || "/placeholder.svg"} alt={brandName} className="w-16 h-16 object-contain" />
          ) : (
            <span className="text-3xl font-bold text-white">{brandName.charAt(0)}</span>
          )}
        </div>

        {/* Brand Info */}
        <div>
          <h1 className="text-4xl font-bold text-white mb-1">{brandName}</h1>
          <p className="text-white/70">
            <span className="text-white/90">{archetype}</span>
            <span className="mx-2">•</span>
            <span>{tagline}</span>
          </p>
        </div>
      </div>
    </GlassCard>
  )
}
