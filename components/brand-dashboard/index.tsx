"use client"

import { useState } from "react"
import { GradientBackground } from "../gradient-background"
import {
  ArrowLeft,
  RotateCcw,
  Play,
  ChevronRight,
  X,
  ChevronDown,
  Crown,
  Eye,
  Leaf,
  Shield,
  Sparkles,
  Heart,
  Flame,
  Users,
  Smile,
  Gem,
  Wand2,
  Target,
  Check,
  Quote,
  CheckCircle,
  XCircle,
  Plus,
  Edit3,
  Trash2,
  MessageSquare,
  Palette,
  User,
  Camera,
  Layers,
  Grid3X3,
  Monitor,
  ImageIcon,
} from "lucide-react"
import { useRouter } from "next/navigation"

// Sample data
const sampleBrand = {
  name: "T-Mobile",
  archetype: "The Rebel",
  archetypeSecondary: "The Magician",
  archetypePercent: 80,
  tagline: "Bold & Disruptive",
  primaryColor: "#E10173",
  secondaryColor: "#000000",
  accentColor: "#2FC4DA",
  colors: [
    {
      hex: "#E10173",
      name: "Magenta",
      role: "Primary",
      analysis:
        "The primary magenta (#E10173) is bold, energetic, and attention-grabbing. It communicates passion, excitement, and innovation - perfect for a disruptive brand challenging industry norms.",
    },
    {
      hex: "#000000",
      name: "Black",
      role: "Secondary",
      analysis:
        "Black provides strong contrast and sophistication. It grounds the energetic magenta and adds a sense of premium quality and seriousness to the brand.",
    },
    {
      hex: "#2FC4DA",
      name: "Cyan",
      role: "Accent",
      analysis:
        "The cyan accent adds a tech-forward, fresh feel. It suggests connectivity, digital innovation, and a modern approach to telecommunications.",
    },
    {
      hex: "#FFFFFF",
      name: "White",
      role: "Background",
      analysis:
        "White creates clarity, openness, and simplicity. It allows the bold brand colors to stand out while maintaining a clean, accessible feel.",
    },
  ],
  logoStyle:
    "Modern and bold with a dynamic magenta accent. The wordmark is clean and confident, with strong letterforms that convey stability and trust. The magenta color makes it instantly recognizable and stands out against competitors.",
  visualIdentity: {
    artDirection: {
      title: "Bold Disruptive Energy",
      description:
        "A high-energy visual style that challenges conventions and stands out from typical telecom imagery. Think vibrant, unexpected, and unapologetically bold.",
      mood: "Energetic, rebellious, confident. Photography and graphics should feel alive and dynamic, never static or corporate. The mood should inspire action and make viewers feel empowered.",
      photography:
        "Real people in authentic moments, but with unexpected angles and bold compositions. High contrast, vibrant colors (especially pops of magenta), and a sense of movement. Avoid sterile stock photography - every image should feel candid and energetic.",
      graphics:
        "Bold geometric shapes, dynamic lines, and confident typography. Use magenta as a highlight color generously. Graphics should feel modern and tech-forward without being cold. Embrace asymmetry and unexpected layouts.",
      uiVibe:
        "Clean but bold. Large touch targets, confident typography, and strategic use of magenta for CTAs. The interface should feel fast and responsive, matching the brand's energetic personality. White space is important for clarity.",
    },
    gallery: [
      {
        url: "/bold-telecom-advertising-magenta.jpg",
        caption: "Brand Campaign Hero",
        analysis: "High energy, bold magenta accents",
      },
      {
        url: "/people-using-phones-urban-lifestyle.jpg",
        caption: "Lifestyle Photography",
        analysis: "Authentic moments, vibrant feel",
      },
      {
        url: "/modern-retail-store-magenta-branding.jpg",
        caption: "Retail Environment",
        analysis: "Brand immersion, bold presence",
      },
      {
        url: "/mobile-app-interface-magenta-accent.jpg",
        caption: "Digital Experience",
        analysis: "Clean UI, strategic color use",
      },
      {
        url: "/outdoor-billboard-telecom-advertisement.jpg",
        caption: "OOH Advertising",
        analysis: "High visibility, simple message",
      },
      {
        url: "/social-media-content-vibrant-colors.jpg",
        caption: "Social Content",
        analysis: "Engaging, shareable, on-brand",
      },
    ],
    visualAnalysis: {
      warmth: 70,
      humanPresence: 85,
      energy: 90,
      premiumFeel: 65,
    },
  },
  voiceKeywords: ["Bold", "Disruptive", "Confident", "Energetic", "Direct", "Unapologetic"],
  voiceTone: {
    description:
      "The brand's tone of voice is designed to be bold, disruptive, and confident. It challenges industry norms and speaks directly to consumers who are tired of the status quo. While primarily energetic and provocative, it can also be empowering and supportive when addressing customer needs.",
    doThis: [
      "Use bold, direct language that challenges competitors",
      "Be confident and unapologetic in claims",
      "Emphasize value and consumer benefits",
      "Speak like an ally against unfair industry practices",
      "Keep it simple and jargon-free",
    ],
    avoidThis: [
      "Sound corporate or stuffy",
      "Use complex technical jargon",
      "Be passive or apologetic",
      "Make vague or wishy-washy statements",
      "Copy competitor messaging styles",
    ],
    examplePhrases: [
      {
        text: "No contracts. No overages. No BS. Just great wireless.",
        context: "Homepage hero",
        toneDescription: "Bold & Direct",
      },
      {
        text: "Hey there! I'm Max from T-Mobile. Ready to show you why the Un-carrier is the better choice?",
        context: "Agent greeting",
        toneDescription: "Confident & Friendly",
      },
      {
        text: "While other carriers nickel-and-dime you, we're giving you more for less. Period.",
        context: "Pricing page",
        toneDescription: "Disruptive & Value-focused",
      },
    ],
  },
  personality: {
    energy: 85,
    formality: 25,
    warmth: 70,
  },
  agentName: "Max",
  agentTraits: ["Confident", "Helpful", "Bold"],
}

const archetypeDefinitions = {
  "The Rebel": {
    icon: Flame,
    color: "#E10173",
    traits: "Bold, disruptive, provocative",
    description: "Challenges convention and pushes for radical change. Rebels want revolution, not evolution.",
    motivation: "Liberation, breaking rules, overthrowing what isn't working",
    voice: "Provocative, edgy, unapologetic",
  },
  "The Magician": {
    icon: Wand2,
    color: "#8B5CF6",
    traits: "Visionary, inspiring, transformative",
    description: "Makes dreams come true through knowledge of fundamental laws of the universe.",
    motivation: "Transformation, making visions reality",
    voice: "Mystical, inspiring, confident",
  },
  "The Hero": {
    icon: Shield,
    color: "#EF4444",
    traits: "Courageous, determined, strong",
    description: "Proves worth through courageous action. Heroes improve the world.",
    motivation: "Mastery, proving oneself, winning",
    voice: "Confident, direct, motivating",
  },
  "The Creator": {
    icon: Sparkles,
    color: "#F59E0B",
    traits: "Innovative, artistic, imaginative",
    description: "Creates things of enduring value. Realizes a vision.",
    motivation: "Innovation, self-expression, vision",
    voice: "Inspiring, authentic, original",
  },
  "The Ruler": {
    icon: Crown,
    color: "#1E40AF",
    traits: "Authoritative, responsible, organized",
    description: "Creates order from chaos. Takes responsibility for the state of affairs.",
    motivation: "Control, stability, success",
    voice: "Commanding, refined, articulate",
  },
  "The Caregiver": {
    icon: Heart,
    color: "#EC4899",
    traits: "Nurturing, generous, compassionate",
    description: "Protects and cares for others. Driven by compassion and generosity.",
    motivation: "Helping others, protection, service",
    voice: "Warm, supportive, reassuring",
  },
  "The Sage": {
    icon: Eye,
    color: "#0EA5E9",
    traits: "Wise, knowledgeable, analytical",
    description: "Uses intelligence to understand the world. Seeks truth and knowledge.",
    motivation: "Truth, understanding, wisdom",
    voice: "Thoughtful, informative, articulate",
  },
  "The Innocent": {
    icon: Gem,
    color: "#10B981",
    traits: "Optimistic, honest, pure",
    description: "Seeks to be happy and do the right thing. Values simplicity.",
    motivation: "Happiness, goodness, simplicity",
    voice: "Optimistic, honest, simple",
  },
  "The Explorer": {
    icon: Leaf,
    color: "#059669",
    traits: "Adventurous, independent, pioneering",
    description: "Seeks to discover and experience a more fulfilling life.",
    motivation: "Freedom, discovery, self-discovery",
    voice: "Adventurous, bold, authentic",
  },
  "The Everyman": {
    icon: Users,
    color: "#6B7280",
    traits: "Relatable, authentic, down-to-earth",
    description: "Believes in the inherent dignity of every person. Wants to belong.",
    motivation: "Belonging, connection, equality",
    voice: "Friendly, humble, genuine",
  },
  "The Jester": {
    icon: Smile,
    color: "#FBBF24",
    traits: "Fun, playful, humorous",
    description: "Lives in the moment with full enjoyment. Brings joy to the world.",
    motivation: "Enjoyment, fun, lightness",
    voice: "Witty, irreverent, playful",
  },
  "The Lover": {
    icon: Heart,
    color: "#BE185D",
    traits: "Passionate, sensual, appreciative",
    description: "Finds and gives love. Values beauty and sensory experience.",
    motivation: "Intimacy, experience, pleasure",
    voice: "Passionate, warm, sensual",
  },
  "The Outlaw": {
    icon: Target,
    color: "#7C3AED",
    traits: "Rebellious, wild, radical",
    description: "Disrupts the status quo. Rules are made to be broken.",
    motivation: "Revenge, revolution, liberation",
    voice: "Wild, rebellious, shocking",
  },
}

const allArchetypes = Object.keys(archetypeDefinitions)

const evidenceExamples = [
  {
    quote: "Un-carrier. No contracts. No overages. No BS.",
    source: "Homepage",
    archetype: "The Rebel",
    explanation: "Direct challenge to industry norms. Bold, disruptive language that positions against competitors.",
    confidence: "high",
  },
  {
    quote: "We won't stop until everyone has access to the connectivity they need.",
    source: "About Page",
    archetype: "The Rebel",
    explanation: "Revolutionary stance promising to change the entire industry for consumers.",
    confidence: "high",
  },
  {
    quote: "See what's possible when technology meets imagination.",
    source: "5G Campaign",
    archetype: "The Magician",
    explanation: "Visionary language about transformation and making the impossible possible.",
    confidence: "medium",
  },
]

// Define BrandDashboardProps to satisfy the type checker
interface BrandDashboardProps {
  brandName?: string
}

export function BrandDashboard({ brandName }: BrandDashboardProps) {
  const router = useRouter()
  const brand = { ...sampleBrand, name: brandName || sampleBrand.name }
  const [detailView, setDetailView] = useState<"archetype" | "voice" | "colors" | "agent" | "visual" | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  // Archetype edit state
  const [editArchetype, setEditArchetype] = useState({
    primary: brand.archetype,
    secondary: brand.archetypeSecondary,
    percent: brand.archetypePercent,
  })

  // Voice edit state
  const [editVoice, setEditVoice] = useState({
    description: brand.voiceTone.description,
    keywords: [...brand.voiceKeywords],
    personality: { ...brand.personality },
    doThis: [...brand.voiceTone.doThis],
    avoidThis: [...brand.voiceTone.avoidThis],
  })
  const [newKeyword, setNewKeyword] = useState("")
  const [newDoThis, setNewDoThis] = useState("")
  const [newAvoidThis, setNewAvoidThis] = useState("")

  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const PrimaryArchetypeIcon = archetypeDefinitions[brand.archetype as keyof typeof archetypeDefinitions]?.icon || Crown
  const SecondaryArchetypeIcon =
    archetypeDefinitions[brand.archetypeSecondary as keyof typeof archetypeDefinitions]?.icon || Wand2

  const getModalConfig = () => {
    switch (detailView) {
      case "archetype":
        return {
          title: "Brand Archetype",
          subtitle: "Select archetypes and adjust their influence",
          icon: Crown,
        }
      case "voice":
        return {
          title: "Brand Tone & Voice",
          subtitle: "Define how your brand communicates",
          icon: MessageSquare,
        }
      case "colors":
        return {
          title: "Brand Colors",
          subtitle: "Color palette and visual identity",
          icon: Palette,
        }
      case "agent":
        return {
          title: "AI Agent Persona",
          subtitle: "Configure your brand's AI representative",
          icon: User,
        }
      case "visual":
        return {
          title: "Visual Identity",
          subtitle: "Art direction, photography, and brand gallery",
          icon: Camera,
        }
      default:
        return { title: "", subtitle: "", icon: Crown }
    }
  }

  const modalConfig = getModalConfig()

  const renderVisualIdentityDetail = () => (
    <div className="space-y-8">
      <div className="relative rounded-3xl overflow-hidden">
        {/* Large hero image with brand overlay */}
        <div className="relative h-64">
          <img
            src={
              brand.visualIdentity.gallery[0]?.url ||
              `/placeholder.svg?height=400&width=800&query=bold magenta telecom branding campaign` ||
              "/placeholder.svg"
            }
            alt="Brand Hero"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${brand.primaryColor}90 0%, ${brand.secondaryColor}70 50%, transparent 100%)`,
            }}
          />
          {/* Logo overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-2xl backdrop-blur-sm"
              style={{
                backgroundColor: `${brand.primaryColor}`,
                boxShadow: `0 20px 60px ${brand.primaryColor}60`,
              }}
            >
              {brand.name.charAt(0)}
            </div>
          </div>
          {/* Art direction title */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-1">{brand.visualIdentity.artDirection.title}</h3>
            <p className="text-white/70 text-sm">{brand.visualIdentity.artDirection.description}</p>
          </div>
        </div>
        {/* Color strip */}
        <div className="flex h-2">
          {brand.colors.map((color, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: color.hex }} />
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
          <Palette className="w-5 h-5" style={{ color: brand.primaryColor }} />
          Color Palette
        </h4>
        {/* Large color blocks */}
        <div className="flex gap-2 mb-4 h-24 rounded-2xl overflow-hidden">
          {brand.colors.map((color, index) => (
            <div
              key={index}
              className="flex-1 relative group cursor-pointer transition-all duration-300 hover:flex-[2]"
              style={{ backgroundColor: color.hex }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-sm">
                <span className="text-white font-bold text-lg">{color.name}</span>
                <span className="text-white/80 text-xs font-mono">{color.hex}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Color analysis cards */}
        <div className="grid grid-cols-2 gap-3">
          {brand.colors.slice(0, 2).map((color, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-white/[0.06]"
              style={{ background: `${color.hex}15` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg shadow-lg" style={{ backgroundColor: color.hex }} />
                <div>
                  <span className="text-white font-medium block">{color.name}</span>
                  <span className="text-white/50 text-xs">{color.role}</span>
                </div>
              </div>
              <p className="text-white/60 text-xs leading-relaxed line-clamp-3">{color.analysis}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
          <ImageIcon className="w-5 h-5" style={{ color: brand.primaryColor }} />
          Brand Gallery
        </h4>
        {/* Featured large image */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="col-span-2 group relative rounded-xl overflow-hidden aspect-[2/1] cursor-pointer">
            <img
              src={
                brand.visualIdentity.gallery[0]?.url ||
                `/placeholder.svg?height=300&width=600&query=bold magenta telecom advertising` ||
                "/placeholder.svg"
              }
              alt={brand.visualIdentity.gallery[0]?.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2"
                  style={{ backgroundColor: brand.primaryColor, color: "white" }}
                >
                  Campaign Hero
                </span>
                <p className="text-white font-medium">{brand.visualIdentity.gallery[0]?.caption}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Smaller images grid */}
        <div className="grid grid-cols-3 gap-2">
          {brand.visualIdentity.gallery.slice(1, 7).map((image, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer">
              <img
                src={image.url || `/placeholder.svg?height=200&width=200&query=${encodeURIComponent(image.caption)}`}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <p className="text-white text-xs font-medium text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5" style={{ color: brand.primaryColor }} />
          Visual Personality
        </h4>
        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-5">
          {[
            {
              label: "Temperature",
              value: brand.visualIdentity.visualAnalysis.warmth,
              leftLabel: "Cool",
              rightLabel: "Warm",
              leftIcon: "❄️",
              rightIcon: "🔥",
            },
            {
              label: "Human Presence",
              value: brand.visualIdentity.visualAnalysis.humanPresence,
              leftLabel: "Abstract",
              rightLabel: "Human",
              leftIcon: "◇",
              rightIcon: "👤",
            },
            {
              label: "Energy Level",
              value: brand.visualIdentity.visualAnalysis.energy,
              leftLabel: "Calm",
              rightLabel: "Energetic",
              leftIcon: "○",
              rightIcon: "⚡",
            },
            {
              label: "Market Position",
              value: brand.visualIdentity.visualAnalysis.premiumFeel,
              leftLabel: "Accessible",
              rightLabel: "Premium",
              leftIcon: "◎",
              rightIcon: "✦",
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm">{item.leftLabel}</span>
                <span className="text-white font-medium text-sm">{item.label}</span>
                <span className="text-white/60 text-sm">{item.rightLabel}</span>
              </div>
              <div className="relative h-3 rounded-full bg-white/[0.08] overflow-hidden">
                <div
                  className="absolute top-0 bottom-0 left-0 rounded-full transition-all duration-700"
                  style={{
                    width: `${item.value}%`,
                    background: `linear-gradient(90deg, ${brand.accentColor || brand.primaryColor}, ${brand.primaryColor})`,
                    boxShadow: `0 0 20px ${brand.primaryColor}50`,
                  }}
                />
                {/* Position indicator */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg transition-all duration-700"
                  style={{ left: `calc(${item.value}% - 8px)` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06]">
        <div
          className="h-32 flex items-center justify-center gap-8 relative"
          style={{ background: brand.secondaryColor }}
        >
          {/* Logo on dark */}
          <div
            className="w-20 h-20 rounded-xl flex items-center justify-center text-3xl font-bold shadow-2xl"
            style={{ backgroundColor: brand.primaryColor, color: "white" }}
          >
            {brand.name.charAt(0)}
          </div>
          {/* Logo on light */}
          <div
            className="w-20 h-20 rounded-xl flex items-center justify-center text-3xl font-bold shadow-2xl"
            style={{ backgroundColor: "white", color: brand.primaryColor }}
          >
            {brand.name.charAt(0)}
          </div>
        </div>
        <div className="p-5">
          <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
            <Grid3X3 className="w-4 h-4" style={{ color: brand.primaryColor }} />
            Logo Style
          </h4>
          <p className="text-white/70 text-sm leading-relaxed">{brand.logoStyle}</p>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
          <Camera className="w-5 h-5" style={{ color: brand.primaryColor }} />
          Art Direction Guidelines
        </h4>
        {[
          { key: "mood", icon: Heart, title: "Mood & Atmosphere", content: brand.visualIdentity.artDirection.mood },
          {
            key: "photography",
            icon: ImageIcon,
            title: "Photography",
            content: brand.visualIdentity.artDirection.photography,
          },
          {
            key: "graphics",
            icon: Layers,
            title: "Graphics & Elements",
            content: brand.visualIdentity.artDirection.graphics,
          },
          {
            key: "uiVibe",
            icon: Monitor,
            title: "UI & Interface Vibe",
            content: brand.visualIdentity.artDirection.uiVibe,
          },
        ].map((item) => (
          <button key={item.key} onClick={() => toggleSection(item.key)} className="w-full text-left">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${brand.primaryColor}20` }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: brand.primaryColor }} />
                  </div>
                  <span className="text-white font-medium">{item.title}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-white/50 transition-transform ${expandedSections.includes(item.key) ? "rotate-180" : ""}`}
                />
              </div>
              {expandedSections.includes(item.key) && (
                <p className="text-white/60 text-sm leading-relaxed mt-3 pl-11">{item.content}</p>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#0a0a0b] relative">
      <GradientBackground />

      {/* Header */}
      <header className="relative z-10 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="w-10 h-10 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.08] transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white/70" />
          </button>
          <div>
            <h1 className="text-white font-semibold text-lg">{brand.name}</h1>
            <p className="text-white/50 text-sm">Brand Analysis</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/70 hover:bg-white/[0.08] transition-all">
            <RotateCcw className="w-4 h-4" />
            <span className="text-sm">Regenerate</span>
          </button>
          <button
            onClick={() => router.push("/chat")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-white transition-all"
            style={{
              background: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.primaryColor}dd)`,
              boxShadow: `0 4px 20px ${brand.primaryColor}40`,
            }}
          >
            <Play className="w-4 h-4" />
            Start Simulation
          </button>
        </div>
      </header>

      <div className="relative z-10 px-6 py-6">
        <div
          className="rounded-3xl relative overflow-hidden"
          style={{
            border: `1px solid ${brand.primaryColor}30`,
          }}
        >
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${brand.visualIdentity.gallery[0]?.url || "/brand-campaign-magenta.jpg"})`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${brand.primaryColor}e0 0%, ${brand.primaryColor}90 30%, rgba(0,0,0,0.8) 100%)`,
            }}
          />

          {/* Content */}
          <div className="relative p-8">
            <div className="flex items-center gap-6">
              <div
                className="w-28 h-28 rounded-2xl flex items-center justify-center text-4xl font-bold text-white shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.primaryColor}cc)`,
                  boxShadow: `0 8px 32px ${brand.primaryColor}60`,
                }}
              >
                {brand.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">{brand.name}</h2>
                <p className="text-white/90 text-xl font-medium">
                  {brand.archetype} • {brand.tagline}
                </p>
                {/* Color swatches in hero */}
                <div className="flex gap-2 mt-4">
                  {brand.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white/30 shadow-lg"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {/* Archetype Card - with visual indicator */}
          <button
            onClick={() => setDetailView("archetype")}
            className="relative p-6 rounded-2xl text-left transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden group"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Decorative gradient blob */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"
              style={{ background: brand.primaryColor }}
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: `${brand.primaryColor}25` }}
                >
                  <PrimaryArchetypeIcon className="w-7 h-7" style={{ color: brand.primaryColor }} />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider">Archetype</p>
                  <p className="text-white font-bold text-lg">{brand.archetype}</p>
                </div>
              </div>

              {/* Archetype visual - donut preview */}
              <div className="flex items-center gap-4 mb-3">
                <div className="relative w-16 h-16">
                  <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                    <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke={brand.primaryColor}
                      strokeWidth="4"
                      strokeDasharray={`${brand.archetypePercent * 0.88} 88`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                    {brand.archetypePercent}%
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <SecondaryArchetypeIcon
                      className="w-4 h-4"
                      style={{
                        color:
                          archetypeDefinitions[brand.archetypeSecondary as keyof typeof archetypeDefinitions]?.color,
                      }}
                    />
                    <span className="text-white/60 text-sm">{brand.archetypeSecondary}</span>
                  </div>
                  <span className="text-white/40 text-xs">{100 - brand.archetypePercent}% influence</span>
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-white/30 absolute bottom-6 right-6" />
          </button>

          {/* Voice & Tone Card - with keywords preview */}
          <button
            onClick={() => setDetailView("voice")}
            className="relative p-6 rounded-2xl text-left transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden group"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Decorative gradient blob */}
            <div
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"
              style={{ background: brand.accentColor }}
            />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: `${brand.primaryColor}25` }}
                >
                  <MessageSquare className="w-7 h-7" style={{ color: brand.primaryColor }} />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-wider">Tone & Voice</p>
                  <p className="text-white font-bold text-lg">
                    {brand.voiceKeywords[0]} & {brand.voiceKeywords[1]}
                  </p>
                </div>
              </div>

              {/* Keywords cloud */}
              <div className="flex flex-wrap gap-2 mb-3">
                {brand.voiceKeywords.slice(0, 4).map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ background: `${brand.primaryColor}20`, color: brand.primaryColor }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              {/* Mini personality bars */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-xs w-16">Energy</span>
                  <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${brand.personality.energy}%`, background: brand.primaryColor }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-white/30 absolute bottom-6 right-6" />
          </button>

          <button
            onClick={() => setDetailView("visual")}
            className="relative p-0 rounded-2xl text-left transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden group col-span-2"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex">
              {/* Image gallery preview */}
              <div className="w-1/2 relative">
                <div className="grid grid-cols-2 gap-0.5 h-full">
                  {brand.visualIdentity.gallery.slice(0, 4).map((img, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden">
                      <img
                        src={
                          img.url || `/placeholder.svg?height=200&width=200&query=${encodeURIComponent(img.caption)}`
                        }
                        alt={img.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0b]" />
              </div>

              {/* Content */}
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${brand.primaryColor}25` }}
                  >
                    <Palette className="w-6 h-6" style={{ color: brand.primaryColor }} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider">Visual Identity</p>
                    <p className="text-white font-bold">{brand.visualIdentity.artDirection.title}</p>
                  </div>
                </div>

                {/* Color palette */}
                <div className="flex gap-2 mb-4">
                  {brand.colors.map((color, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div
                        className="w-10 h-10 rounded-xl border border-white/10 shadow-lg"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-white/40 text-[10px]">{color.role}</span>
                    </div>
                  ))}
                </div>

                <p className="text-white/50 text-sm line-clamp-2">{brand.visualIdentity.artDirection.description}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-white/30 absolute bottom-6 right-6" />
          </button>

          {/* AI Agent Card - with avatar preview */}
          <button
            onClick={() => setDetailView("agent")}
            className="relative p-6 rounded-2xl text-left transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden group col-span-2"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Decorative gradient */}
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"
              style={{ background: `linear-gradient(135deg, ${brand.primaryColor}, ${brand.accentColor})` }}
            />

            <div className="relative flex items-center gap-6">
              {/* Agent avatar */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  background: `linear-gradient(135deg, ${brand.primaryColor}40, ${brand.accentColor}40)`,
                  border: `2px solid ${brand.primaryColor}50`,
                }}
              >
                <User className="w-10 h-10" style={{ color: brand.primaryColor }} />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider">AI Agent</p>
                    <p className="text-white font-bold text-xl">{brand.agentName}</p>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: `${brand.primaryColor}20`, color: brand.primaryColor }}
                  >
                    Active
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {brand.agentTraits.map((trait) => (
                    <span key={trait} className="px-3 py-1.5 rounded-full text-xs bg-white/[0.05] text-white/70">
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Sample greeting */}
                <p className="text-white/40 text-sm mt-3 italic">
                  "{brand.voiceTone.examplePhrases[1]?.text.slice(0, 60)}..."
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-white/30 absolute bottom-6 right-6" />
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      {detailView && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setDetailView(null)
              setIsEditing(false)
            }}
          />
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-t-3xl p-6"
            style={{
              background: "linear-gradient(180deg, rgba(20,20,22,0.98) 0%, rgba(10,10,11,0.99) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${brand.primaryColor}20` }}
                >
                  <modalConfig.icon className="w-5 h-5" style={{ color: brand.primaryColor }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{modalConfig.title}</h3>
                  <p className="text-white/50 text-sm">{modalConfig.subtitle}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setDetailView(null)
                  setIsEditing(false)
                }}
                className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition-all"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>
            </div>

            {/* Archetype Detail */}
            {detailView === "archetype" && (
              <div className="space-y-6">
                {/* Edit Toggle */}
                <div className="flex justify-end">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] text-white/70 hover:bg-white/[0.1] transition-all"
                    >
                      <Edit3 className="w-4 h-4" />
                      Edit
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 rounded-xl bg-white/[0.05] text-white/70 hover:bg-white/[0.1] transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 rounded-xl text-white font-medium transition-all"
                        style={{ background: brand.primaryColor }}
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>

                {!isEditing ? (
                  <>
                    {/* Donut Chart */}
                    <div className="flex flex-col items-center">
                      <div className="relative w-40 h-40">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke={brand.primaryColor}
                            strokeWidth="12"
                            strokeDasharray={`${brand.archetypePercent * 2.51} 251`}
                            strokeLinecap="round"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke={
                              archetypeDefinitions[brand.archetypeSecondary as keyof typeof archetypeDefinitions]?.color
                            }
                            strokeWidth="12"
                            strokeDasharray={`${(100 - brand.archetypePercent) * 2.51} 251`}
                            strokeDashoffset={`-${brand.archetypePercent * 2.51}`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{brand.archetypePercent}%</span>
                        </div>
                      </div>
                      <p className="text-white/60 mt-4">
                        Blended identity: {brand.archetype.replace("The ", "")} +{" "}
                        {brand.archetypeSecondary.replace("The ", "")}
                      </p>
                    </div>

                    {/* Archetype Cards */}
                    <div className="space-y-3">
                      {[
                        { name: brand.archetype, percent: brand.archetypePercent, isPrimary: true },
                        { name: brand.archetypeSecondary, percent: 100 - brand.archetypePercent, isPrimary: false },
                      ].map((arch) => {
                        const def = archetypeDefinitions[arch.name as keyof typeof archetypeDefinitions]
                        const Icon = def?.icon || Crown
                        return (
                          <div
                            key={arch.name}
                            className="p-4 rounded-xl"
                            style={{
                              background: arch.isPrimary ? `${def?.color}15` : "rgba(255,255,255,0.03)",
                              border: `1px solid ${arch.isPrimary ? `${def?.color}30` : "rgba(255,255,255,0.06)"}`,
                            }}
                          >
                            <div className="flex items-start gap-4">
                              <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                style={{ background: `${def?.color}20` }}
                              >
                                <Icon className="w-6 h-6" style={{ color: def?.color }} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="text-white font-semibold">{arch.name}</h4>
                                  <span className="text-white/70 font-medium">{arch.percent}%</span>
                                </div>
                                <p className="text-white/50 text-sm mb-2">{def?.traits}</p>
                                <p className="text-white/70 text-sm">{def?.description}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* Why This Archetype */}
                    <button
                      onClick={() => toggleSection("why")}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <Target className="w-5 h-5" style={{ color: brand.primaryColor }} />
                        <span className="text-white font-medium">Why This Archetype?</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-white/50 transition-transform ${expandedSections.includes("why") ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.includes("why") && (
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] -mt-2">
                        <p className="text-white/70 text-sm leading-relaxed">
                          Based on analysis of {brand.name}&apos;s brand communications, visual identity, and market
                          positioning, the {brand.archetype} archetype emerges as dominant ({brand.archetypePercent}%)
                          with {brand.archetypeSecondary} as a secondary influence ({100 - brand.archetypePercent}%).
                          This combination reflects the brand&apos;s disruptive energy and bold positioning while
                          acknowledging its visionary and transformative initiatives.
                        </p>
                      </div>
                    )}

                    {/* Evidence Examples */}
                    <button
                      onClick={() => toggleSection("evidence")}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <Quote className="w-5 h-5" style={{ color: brand.primaryColor }} />
                        <span className="text-white font-medium">Evidence Examples (3)</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-white/50 transition-transform ${expandedSections.includes("evidence") ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.includes("evidence") && (
                      <div className="space-y-3 -mt-2">
                        {[
                          {
                            quote: "No contracts. No overages. No BS.",
                            analysis:
                              "Rebel language - Direct challenge to industry norms with bold, unapologetic messaging.",
                            strength: "high",
                          },
                          {
                            quote: "We won't stop until everyone has access to unlimited.",
                            analysis:
                              "Hero/Magician blend - Visionary statement about transforming the industry for consumers.",
                            strength: "medium",
                          },
                          {
                            quote: "The Un-carrier",
                            analysis:
                              "Rebel positioning - Defining the brand by what it's NOT, challenging the category itself.",
                            strength: "high",
                          },
                        ].map((item, i) => (
                          <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                            <div className="flex items-start gap-3 mb-3">
                              <Quote className="w-4 h-4 text-white/30 flex-shrink-0 mt-1" />
                              <p className="text-white/90 italic">&ldquo;{item.quote}&rdquo;</p>
                            </div>
                            <p className="text-white/60 text-sm mb-2">{item.analysis}</p>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                item.strength === "high"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                              }`}
                            >
                              {item.strength}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  /* Edit Mode */
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-medium mb-3">Primary Archetype</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {Object.entries(archetypeDefinitions).map(([name, def]) => {
                          const Icon = def.icon
                          const isSelected = editArchetype.primary === name
                          return (
                            <button
                              key={name}
                              onClick={() => setEditArchetype({ ...editArchetype, primary: name })}
                              className={`p-3 rounded-xl flex flex-col items-center gap-2 transition-all ${
                                isSelected ? "ring-2" : "hover:bg-white/[0.05]"
                              }`}
                              style={{
                                background: isSelected ? `${def.color}20` : "rgba(255,255,255,0.03)",
                                borderColor: isSelected ? def.color : "transparent",
                                ringColor: isSelected ? def.color : "transparent",
                              }}
                            >
                              <Icon className="w-5 h-5" style={{ color: def.color }} />
                              <span className="text-white/70 text-xs text-center">{name.replace("The ", "")}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-3">Secondary Archetype</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {Object.entries(archetypeDefinitions).map(([name, def]) => {
                          const Icon = def.icon
                          const isSelected = editArchetype.secondary === name
                          const isDisabled = editArchetype.primary === name
                          return (
                            <button
                              key={name}
                              onClick={() => !isDisabled && setEditArchetype({ ...editArchetype, secondary: name })}
                              disabled={isDisabled}
                              className={`p-3 rounded-xl flex flex-col items-center gap-2 transition-all ${
                                isSelected ? "ring-2" : isDisabled ? "opacity-30" : "hover:bg-white/[0.05]"
                              }`}
                              style={{
                                background: isSelected ? `${def.color}20` : "rgba(255,255,255,0.03)",
                                ringColor: isSelected ? def.color : "transparent",
                              }}
                            >
                              <Icon className="w-5 h-5" style={{ color: def.color }} />
                              <span className="text-white/70 text-xs text-center">{name.replace("The ", "")}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-3">Balance</h4>
                      <div className="flex items-center gap-4">
                        <span className="text-white/70 text-sm w-20">{editArchetype.primary.replace("The ", "")}</span>
                        <input
                          type="range"
                          min="50"
                          max="95"
                          value={editArchetype.percent}
                          onChange={(e) =>
                            setEditArchetype({ ...editArchetype, percent: Number.parseInt(e.target.value) })
                          }
                          className="flex-1 accent-pink-500"
                        />
                        <span className="text-white/70 text-sm w-20 text-right">
                          {editArchetype.secondary.replace("The ", "")}
                        </span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-white font-medium">{editArchetype.percent}%</span>
                        <span className="text-white font-medium">{100 - editArchetype.percent}%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Voice & Tone Detail */}
            {detailView === "voice" && (
              <div className="space-y-6">
                {/* Edit Toggle */}
                <div className="flex justify-end">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] text-white/70 hover:bg-white/[0.1] transition-all"
                    >
                      <Edit3 className="w-4 h-4" />
                      Edit
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 rounded-xl bg-white/[0.05] text-white/70 hover:bg-white/[0.1] transition-all"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 rounded-xl text-white font-medium transition-all"
                        style={{ background: brand.primaryColor }}
                      >
                        Save
                      </button>
                    </div>
                  )}
                </div>

                {!isEditing ? (
                  <>
                    {/* Description */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <p className="text-white/80 text-sm leading-relaxed">{brand.voiceTone.description}</p>
                    </div>

                    {/* Keywords */}
                    <div>
                      <h4 className="text-white/70 text-sm font-medium mb-3">Voice Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {brand.voiceKeywords.map((keyword) => (
                          <span
                            key={keyword}
                            className="px-4 py-2 rounded-full text-sm"
                            style={{ background: `${brand.primaryColor}20`, color: brand.primaryColor }}
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Personality Sliders */}
                    <div className="space-y-4">
                      <h4 className="text-white/70 text-sm font-medium">Communication Style</h4>
                      {[
                        { label: "Energy", low: "Calm", high: "Energetic", value: brand.personality.energy },
                        { label: "Formality", low: "Casual", high: "Formal", value: brand.personality.formality },
                        { label: "Warmth", low: "Professional", high: "Friendly", value: brand.personality.warmth },
                      ].map((slider) => (
                        <div key={slider.label}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white/50 text-sm">{slider.low}</span>
                            <span className="text-white/50 text-sm">{slider.high}</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/[0.1] overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${slider.value}%`,
                                background: `linear-gradient(90deg, ${brand.primaryColor}, ${brand.accentColor})`,
                              }}
                            />
                          </div>
                          <div className="text-right mt-1">
                            <span className="text-white/70 text-sm">{slider.value}%</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Do This */}
                    <button
                      onClick={() => toggleSection("doThis")}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-white font-medium">Do This</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-white/50 transition-transform ${expandedSections.includes("doThis") ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.includes("doThis") && (
                      <div className="space-y-2 -mt-2">
                        {brand.voiceTone.doThis.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/20"
                          >
                            <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Avoid This */}
                    <button
                      onClick={() => toggleSection("avoidThis")}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <XCircle className="w-5 h-5 text-red-400" />
                        <span className="text-white font-medium">Avoid This</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-white/50 transition-transform ${expandedSections.includes("avoidThis") ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.includes("avoidThis") && (
                      <div className="space-y-2 -mt-2">
                        {brand.voiceTone.avoidThis.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                          >
                            <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Example Phrases */}
                    <button
                      onClick={() => toggleSection("examples")}
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="flex items-center gap-3">
                        <Quote className="w-5 h-5" style={{ color: brand.primaryColor }} />
                        <span className="text-white font-medium">
                          Example Phrases ({brand.voiceTone.examplePhrases.length})
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-white/50 transition-transform ${expandedSections.includes("examples") ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.includes("examples") && (
                      <div className="space-y-3 -mt-2">
                        {brand.voiceTone.examplePhrases.map((phrase, i) => (
                          <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                            <div className="flex items-start gap-3 mb-3">
                              <Quote className="w-4 h-4 text-white/30 flex-shrink-0 mt-1" />
                              <p className="text-white/90 italic">&ldquo;{phrase.text}&rdquo;</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="px-2 py-1 rounded-full text-xs bg-white/[0.05] text-white/60">
                                {phrase.context}
                              </span>
                              <span
                                className="px-2 py-1 rounded-full text-xs"
                                style={{ background: `${brand.primaryColor}20`, color: brand.primaryColor }}
                              >
                                {phrase.toneDescription}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  /* Edit Mode for Voice */
                  <div className="space-y-6">
                    {/* Description Edit */}
                    <div>
                      <h4 className="text-white font-medium mb-3">Voice Description</h4>
                      <textarea
                        value={editVoice.description}
                        onChange={(e) => setEditVoice({ ...editVoice, description: e.target.value })}
                        className="w-full h-32 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/90 text-sm resize-none focus:outline-none focus:border-white/20"
                        placeholder="Describe the brand's tone of voice..."
                      />
                    </div>

                    {/* Keywords Edit */}
                    <div>
                      <h4 className="text-white font-medium mb-3">Voice Keywords</h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {editVoice.keywords.map((keyword, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-2 px-3 py-2 rounded-full text-sm"
                            style={{ background: `${brand.primaryColor}20`, color: brand.primaryColor }}
                          >
                            {keyword}
                            <button
                              onClick={() =>
                                setEditVoice({
                                  ...editVoice,
                                  keywords: editVoice.keywords.filter((_, idx) => idx !== i),
                                })
                              }
                              className="hover:opacity-70"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newKeyword}
                          onChange={(e) => setNewKeyword(e.target.value)}
                          placeholder="Add keyword..."
                          className="flex-1 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-white/20"
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && newKeyword.trim()) {
                              setEditVoice({ ...editVoice, keywords: [...editVoice.keywords, newKeyword.trim()] })
                              setNewKeyword("")
                            }
                          }}
                        />
                        <button
                          onClick={() => {
                            if (newKeyword.trim()) {
                              setEditVoice({ ...editVoice, keywords: [...editVoice.keywords, newKeyword.trim()] })
                              setNewKeyword("")
                            }
                          }}
                          className="px-4 py-2 rounded-xl bg-white/[0.05] text-white/70 hover:bg-white/[0.1]"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Personality Sliders Edit */}
                    <div className="space-y-4">
                      <h4 className="text-white font-medium">Communication Style</h4>
                      {[
                        { key: "energy" as const, label: "Energy", low: "Calm", high: "Energetic" },
                        { key: "formality" as const, label: "Formality", low: "Casual", high: "Formal" },
                        { key: "warmth" as const, label: "Warmth", low: "Professional", high: "Friendly" },
                      ].map((slider) => (
                        <div key={slider.key}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white/50 text-sm">{slider.low}</span>
                            <span className="text-white/50 text-sm">{slider.high}</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={editVoice.personality[slider.key]}
                            onChange={(e) =>
                              setEditVoice({
                                ...editVoice,
                                personality: {
                                  ...editVoice.personality,
                                  [slider.key]: Number.parseInt(e.target.value),
                                },
                              })
                            }
                            className="w-full accent-pink-500"
                          />
                          <div className="text-right mt-1">
                            <span className="text-white/70 text-sm">{editVoice.personality[slider.key]}%</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Do This Edit */}
                    <div>
                      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        Do This
                      </h4>
                      <div className="space-y-2 mb-3">
                        {editVoice.doThis.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20"
                          >
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-white/80 text-sm flex-1">{item}</span>
                            <button
                              onClick={() =>
                                setEditVoice({ ...editVoice, doThis: editVoice.doThis.filter((_, idx) => idx !== i) })
                              }
                              className="text-white/40 hover:text-red-400"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newDoThis}
                          onChange={(e) => setNewDoThis(e.target.value)}
                          placeholder="Add guideline..."
                          className="flex-1 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none"
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && newDoThis.trim()) {
                              setEditVoice({ ...editVoice, doThis: [...editVoice.doThis, newDoThis.trim()] })
                              setNewDoThis("")
                            }
                          }}
                        />
                        <button
                          onClick={() => {
                            if (newDoThis.trim()) {
                              setEditVoice({ ...editVoice, doThis: [...editVoice.doThis, newDoThis.trim()] })
                              setNewDoThis("")
                            }
                          }}
                          className="px-4 py-2 rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500/30"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Avoid This Edit */}
                    <div>
                      <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-400" />
                        Avoid This
                      </h4>
                      <div className="space-y-2 mb-3">
                        {editVoice.avoidThis.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                          >
                            <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                            <span className="text-white/80 text-sm flex-1">{item}</span>
                            <button
                              onClick={() =>
                                setEditVoice({
                                  ...editVoice,
                                  avoidThis: editVoice.avoidThis.filter((_, idx) => idx !== i),
                                })
                              }
                              className="text-white/40 hover:text-red-400"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newAvoidThis}
                          onChange={(e) => setNewAvoidThis(e.target.value)}
                          placeholder="Add thing to avoid..."
                          className="flex-1 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none"
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && newAvoidThis.trim()) {
                              setEditVoice({ ...editVoice, avoidThis: [...editVoice.avoidThis, newAvoidThis.trim()] })
                              setNewAvoidThis("")
                            }
                          }}
                        />
                        <button
                          onClick={() => {
                            if (newAvoidThis.trim()) {
                              setEditVoice({ ...editVoice, avoidThis: [...editVoice.avoidThis, newAvoidThis.trim()] })
                              setNewAvoidThis("")
                            }
                          }}
                          className="px-4 py-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Visual Identity Detail - NEW */}
            {detailView === "visual" && renderVisualIdentityDetail()}

            {/* Colors Detail */}
            {detailView === "colors" && (
              <div className="space-y-4">
                {brand.colors.map((color, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <div
                      className="w-16 h-16 rounded-xl border border-white/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="text-white font-medium">{color.name}</p>
                      <p className="text-white/50 text-sm font-mono">{color.hex}</p>
                      <p className="text-white/40 text-xs mt-1">{color.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Agent Detail */}
            {detailView === "agent" && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                    style={{ background: `${brand.primaryColor}30`, color: brand.primaryColor }}
                  >
                    {brand.agentName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{brand.agentName}</p>
                    <p className="text-white/50 text-sm">AI Brand Representative</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-white/70 text-sm font-medium mb-3">Personality Traits</h4>
                  <div className="flex flex-wrap gap-2">
                    {brand.agentTraits.map((trait) => (
                      <span
                        key={trait}
                        className="px-4 py-2 rounded-full text-sm"
                        style={{ background: `${brand.primaryColor}20`, color: brand.primaryColor }}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => router.push("/chat")}
                  className="w-full py-3 rounded-xl text-white font-medium"
                  style={{ background: brand.primaryColor }}
                >
                  Chat with {brand.agentName}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
