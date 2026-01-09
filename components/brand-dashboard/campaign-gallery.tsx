"use client"
import { Images, Search, Sparkles } from "lucide-react"
import { GlassSection } from "./glass-section"

interface CampaignImage {
  url: string
  title?: string
}

interface CampaignGalleryProps {
  images: CampaignImage[]
  primaryColor: string
  onFindImages?: () => void
  onAnalyzeVisuals?: () => void
  onExpand?: () => void
}

export function CampaignGallery({
  images,
  primaryColor,
  onFindImages,
  onAnalyzeVisuals,
  onExpand,
}: CampaignGalleryProps) {
  return (
    <GlassSection icon={<Images className="w-5 h-5" />} title="Visual Gallery" expandable onExpand={onExpand}>
      {/* Action buttons */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={onFindImages}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/70 hover:bg-white/[0.1] transition-all"
        >
          <Search className="w-4 h-4" />
          <span className="text-sm">Find images</span>
        </button>
        <button
          onClick={onAnalyzeVisuals}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/70 hover:bg-white/[0.1] transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">Analyze visuals</span>
        </button>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-3 gap-2">
        {images.slice(0, 6).map((image, index) => (
          <div key={index} className="aspect-square rounded-xl overflow-hidden bg-white/[0.05]">
            <img
              src={image.url || "/placeholder.svg"}
              alt={image.title || `Campaign ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      {images.length > 6 && <p className="text-center text-xs text-white/40 mt-3">+{images.length - 6} more images</p>}
    </GlassSection>
  )
}
