"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { GradientBackground } from "./gradient-background"
import { PersonalityIcon } from "./personality-icon"
import { Search, Sparkles, Menu, ChevronLeft, ChevronRight } from "lucide-react"

const suggestedBrands = [
  "Claro",
  "פלאפון",
  "At&T",
  "Vodafone United Kingdom",
  "Claro Mexico",
  "Amdocs",
  "Singtel",
  "Sk Telecom",
  "True",
  "Hotwire",
  "Vodafone",
  "Vodafone Egypt",
  "בזק",
  "Globe",
  "Orange Spain",
  "T Mobile Usa",
  "Fastweb",
]

export function SearchHome() {
  const [searchValue, setSearchValue] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const router = useRouter()

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScroll, 300)
    }
  }

  const handleBrandClick = (brand: string) => {
    const slug = brand.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")
    router.push(`/brand/${slug}`)
  }

  const handleAnalyze = () => {
    if (searchValue.trim()) {
      handleBrandClick(searchValue)
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0a0a0b]">
      <GradientBackground />

      {/* Menu Button - glass style */}
      <div className="relative z-10 p-6">
        <button className="w-12 h-12 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.08] transition-all duration-300">
          <Menu className="w-5 h-5 text-white/70" />
        </button>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 -mt-16">
        <div className="mb-16">
          <PersonalityIcon size={100} />
        </div>

        {/* Title with glow effect */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight">Brand Personality</h1>
          <h2
            className="text-5xl md:text-7xl font-bold tracking-tight pb-4"
            style={{
              background: "linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 80px rgba(236, 72, 153, 0.5)",
            }}
          >
            Engineering
          </h2>
        </div>

        {/* Search Box - enhanced glass morphism */}
        <div
          className="w-full max-w-2xl p-1.5 mb-10 rounded-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-white/40 ml-4" />
            <input
              type="text"
              placeholder="Enter brand name (e.g. Vodafone, Nike)..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
              className="flex-1 bg-transparent text-white placeholder:text-white/30 outline-none py-4 text-lg"
            />
            <button
              onClick={handleAnalyze}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
                boxShadow: "0 4px 20px rgba(236, 72, 153, 0.4)",
              }}
            >
              <Sparkles className="w-4 h-4" />
              Analyze Brand
            </button>
          </div>
        </div>

        <div className="w-full max-w-4xl relative">
          {/* Section label */}
          <p className="text-white/40 text-sm mb-4 px-2">Recent brands</p>

          {/* Carousel container */}
          <div className="relative group">
            {/* Left gradient fade + arrow */}
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0a0a0b] to-transparent pointer-events-none" />
                <button
                  onClick={() => scroll("left")}
                  className="relative z-10 w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.1] flex items-center justify-center text-white/70 hover:bg-white/[0.15] hover:text-white transition-all duration-300 ml-1"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Scrollable brands */}
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-3 overflow-x-auto scrollbar-hide px-2 py-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {suggestedBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => handleBrandClick(brand)}
                  className="flex-shrink-0 px-5 py-3 rounded-xl text-sm bg-white/[0.03] border border-white/[0.08] text-white/60 hover:bg-white/[0.08] hover:text-white hover:border-white/[0.15] transition-all duration-300 backdrop-blur-sm whitespace-nowrap"
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Right gradient fade + arrow */}
            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center">
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0a0a0b] to-transparent pointer-events-none" />
                <button
                  onClick={() => scroll("right")}
                  className="relative z-10 w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.1] flex items-center justify-center text-white/70 hover:bg-white/[0.15] hover:text-white transition-all duration-300 mr-1"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
