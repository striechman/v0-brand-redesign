export function GradientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#0a0a0b]">
      {/* Large pink blob - top right - matching aOS style */}
      <div
        className="absolute w-[700px] h-[700px] top-[-150px] right-[-100px] rounded-full animate-blob-breathe"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.7) 0%, rgba(236, 72, 153, 0.3) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Secondary pink blob - center left */}
      <div
        className="absolute w-[500px] h-[500px] top-[35%] left-[5%] rounded-full animate-blob-breathe-delayed"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(236, 72, 153, 0.2) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Purple/violet blob - bottom */}
      <div
        className="absolute w-[600px] h-[600px] bottom-[-100px] left-[30%] rounded-full animate-blob-breathe-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Small accent pink blob - right side */}
      <div
        className="absolute w-[350px] h-[350px] top-[60%] right-[5%] rounded-full animate-blob-breathe-fast"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, rgba(236, 72, 153, 0.2) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0b]/30 to-[#0a0a0b]/60" />
    </div>
  )
}
