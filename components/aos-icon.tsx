"use client"

interface AosIconProps {
  variant?: "single" | "duo" | "trio" | "quad" | "cloud"
  color?: "pink" | "coral" | "orange" | "purple" | "cyan" | "blue"
  size?: number
  className?: string
  animated?: boolean
}

const colorMap = {
  pink: "#E91E8C",
  coral: "#E85A6B",
  orange: "#F59E0B",
  purple: "#8B5CF6",
  cyan: "#06B6D4",
  blue: "#3B82F6",
}

function GlowOrb({
  color,
  size,
  x,
  y,
  delay = 0,
  animated = true,
}: {
  color: string
  size: number
  x: number
  y: number
  delay?: number
  animated?: boolean
}) {
  return (
    <div
      className={animated ? "animate-breathe-center" : ""}
      style={{
        position: "absolute",
        width: size,
        height: size,
        left: x,
        top: y,
        borderRadius: "50%",
        background: `radial-gradient(circle at 50% 50%, ${color} 0%, ${color}dd 30%, ${color}66 60%, transparent 80%)`,
        filter: `blur(${size * 0.15}px)`,
        animationDelay: `${delay}s`,
      }}
    />
  )
}

export function AosIcon({
  variant = "single",
  color = "cyan",
  size = 80,
  className = "",
  animated = true,
}: AosIconProps) {
  const baseColor = colorMap[color]
  const orbSize = size * 0.45

  const variants = {
    // Single glowing orb (like Cognitive core)
    single: () => (
      <div className="relative" style={{ width: size, height: size }}>
        {/* Outer glow */}
        <div
          className={animated ? "animate-pulse" : ""}
          style={{
            position: "absolute",
            inset: -size * 0.2,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${baseColor}40 0%, transparent 70%)`,
            filter: `blur(${size * 0.15}px)`,
          }}
        />
        {/* Main orb */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: `
              radial-gradient(ellipse 40% 40% at 30% 30%, rgba(255, 255, 255, 0.5) 0%, transparent 60%),
              radial-gradient(ellipse 30% 30% at 70% 70%, rgba(0, 0, 0, 0.4) 0%, transparent 50%),
              radial-gradient(circle, ${baseColor} 0%, ${baseColor}cc 50%, ${baseColor}66 100%)
            `,
          }}
        />
      </div>
    ),

    // Two orbs (like our personality icon)
    duo: () => {
      const orbW = size * 0.55
      const gap = orbW * 0.2
      return (
        <div className="relative" style={{ width: size, height: orbW }}>
          <GlowOrb color={colorMap.pink} size={orbW} x={0} y={0} delay={0} animated={animated} />
          <GlowOrb color={colorMap.cyan} size={orbW} x={size - orbW} y={0} delay={0.3} animated={animated} />
        </div>
      )
    },

    // Three orbs in triangle (like Business process / Cloud)
    trio: () => {
      const orbW = size * 0.42
      return (
        <div className="relative" style={{ width: size, height: size }}>
          {/* Top two orbs */}
          <GlowOrb color={baseColor} size={orbW} x={0} y={size * 0.15} delay={0} animated={animated} />
          <GlowOrb color={baseColor} size={orbW} x={size - orbW} y={size * 0.15} delay={0.2} animated={animated} />
          {/* Bottom center orb */}
          <GlowOrb
            color={baseColor}
            size={orbW}
            x={(size - orbW) / 2}
            y={size - orbW}
            delay={0.4}
            animated={animated}
          />
        </div>
      )
    },

    // Four orbs in grid (like Agentic services / BSS-OSS)
    quad: () => {
      const orbW = size * 0.4
      const gap = size * 0.08
      return (
        <div className="relative" style={{ width: size, height: size }}>
          <GlowOrb color={baseColor} size={orbW} x={gap} y={gap} delay={0} animated={animated} />
          <GlowOrb color={baseColor} size={orbW} x={size - orbW - gap} y={gap} delay={0.15} animated={animated} />
          <GlowOrb color={baseColor} size={orbW} x={gap} y={size - orbW - gap} delay={0.3} animated={animated} />
          <GlowOrb
            color={baseColor}
            size={orbW}
            x={size - orbW - gap}
            y={size - orbW - gap}
            delay={0.45}
            animated={animated}
          />
        </div>
      )
    },

    // Cloud formation - 3 orbs like cloud icon
    cloud: () => {
      const orbW = size * 0.45
      return (
        <div className="relative" style={{ width: size, height: size * 0.8 }}>
          {/* Top center large orb */}
          <GlowOrb
            color={baseColor}
            size={orbW * 1.1}
            x={(size - orbW * 1.1) / 2}
            y={0}
            delay={0}
            animated={animated}
          />
          {/* Bottom two orbs */}
          <GlowOrb color={baseColor} size={orbW} x={0} y={size * 0.35} delay={0.2} animated={animated} />
          <GlowOrb color={baseColor} size={orbW} x={size - orbW} y={size * 0.35} delay={0.4} animated={animated} />
        </div>
      )
    },
  }

  return <div className={className}>{variants[variant]()}</div>
}
