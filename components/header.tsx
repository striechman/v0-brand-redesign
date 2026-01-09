import { GlassCard } from "./glass-card"
import { Button } from "./ui/button"
import { Home, Sparkles, Play, Menu } from "lucide-react"

interface HeaderProps {
  brandName: string
  brandLogo?: string
}

export function Header({ brandName, brandLogo }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto">
        <GlassCard className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Menu Button */}
            <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Menu className="w-5 h-5 text-white/70" />
            </button>

            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                {brandLogo ? (
                  <img src={brandLogo || "/placeholder.svg"} alt={brandName} className="w-8 h-8 object-contain" />
                ) : (
                  <span className="font-bold text-white">{brandName.charAt(0)}</span>
                )}
              </div>
              <div>
                <h1 className="font-semibold text-white">{brandName}</h1>
                <p className="text-xs text-muted-foreground">Brand Analysis</p>
              </div>
            </div>

            {/* Regenerate Button */}
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm text-white/70">
              <Sparkles className="w-4 h-4" />
              Regenerate
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Home Link */}
            <button className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              Home
            </button>

            {/* Start Simulation Button */}
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
              <Play className="w-4 h-4" />
              Start Simulation
            </Button>
          </div>
        </GlassCard>
      </div>
    </header>
  )
}
