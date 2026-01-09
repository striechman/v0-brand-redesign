"use client"

interface PersonalityIconProps {
  size?: number
  className?: string
}

export function PersonalityIcon({ size = 120, className = "" }: PersonalityIconProps) {
  const circleSize = size * 0.9
  const overlap = circleSize * 0.25 // 25% overlap

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: circleSize * 2 - overlap,
        height: circleSize,
      }}
    >
      {/* Outer glow - pink side */}
      <div
        className="absolute animate-breathe-left"
        style={{
          width: circleSize,
          height: circleSize,
          left: 0,
          top: 0,
          borderRadius: "50%",
          background: "rgba(236, 72, 153, 0.4)",
          filter: `blur(${size * 0.25}px)`,
        }}
      />

      {/* Outer glow - cyan side */}
      <div
        className="absolute animate-breathe-right"
        style={{
          width: circleSize,
          height: circleSize,
          right: 0,
          top: 0,
          borderRadius: "50%",
          background: "rgba(6, 182, 212, 0.4)",
          filter: `blur(${size * 0.25}px)`,
        }}
      />

      <div
        className="absolute animate-breathe-left"
        style={{
          width: circleSize,
          height: circleSize,
          left: 0,
          top: 0,
          borderRadius: "50%",
          background: `
            radial-gradient(ellipse 35% 35% at 25% 25%, rgba(255, 180, 220, 0.9) 0%, transparent 70%),
            radial-gradient(ellipse 25% 25% at 65% 70%, rgba(0, 0, 0, 0.3) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 75% 35%, rgba(255, 120, 180, 0.7) 0%, transparent 60%),
            radial-gradient(ellipse 100% 100% at 50% 50%, #ec4899 0%, #db2777 40%, #9d174d 100%)
          `,
        }}
      />

      <div
        className="absolute animate-breathe-right"
        style={{
          width: circleSize,
          height: circleSize,
          right: 0,
          top: 0,
          borderRadius: "50%",
          background: `
            radial-gradient(ellipse 35% 35% at 75% 25%, rgba(180, 255, 255, 0.9) 0%, transparent 70%),
            radial-gradient(ellipse 25% 25% at 35% 70%, rgba(0, 0, 0, 0.3) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 25% 35%, rgba(100, 220, 255, 0.7) 0%, transparent 60%),
            radial-gradient(ellipse 100% 100% at 50% 50%, #22d3ee 0%, #06b6d4 40%, #0e7490 100%)
          `,
          mixBlendMode: "lighten",
        }}
      />
    </div>
  )
}
