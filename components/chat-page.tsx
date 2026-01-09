"use client"

import { useState } from "react"
import { GradientBackground } from "./gradient-background"
import { AosIcon } from "./aos-icon"
import { Menu, Users, Volume2, RotateCcw, X, Send } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

interface ChatPageProps {
  agentName?: string
  agentRole?: string
  brandName?: string
  suggestions?: string[]
}

export function ChatPage({
  agentName = "Yael",
  agentRole = "Customer Service",
  brandName = "פלאפון",
  suggestions = [
    "Why was I charged extra for roaming? I thought it was included.",
    "We're traveling to Europe next month, what's the best plan?",
    "How do I add more lines for my kids?",
  ],
}: ChatPageProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isVoiceActive, setIsVoiceActive] = useState(true)

  const handleSend = () => {
    if (!inputValue.trim()) return
    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
    }
    setMessages([...messages, newMessage])
    setInputValue("")
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
  }

  const hasMessages = messages.length > 0

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0a0a0b]">
      <GradientBackground />

      {/* Header */}
      <header
        className="relative z-20 flex items-center justify-between px-6 py-4"
        style={{
          background: "rgba(10, 10, 11, 0.8)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] transition-all duration-300">
            <Menu className="w-5 h-5 text-white/70" />
          </button>

          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold text-white">{agentName}</h1>
                <span
                  className="px-2 py-0.5 text-xs font-medium rounded-md"
                  style={{
                    background: "rgba(59, 130, 246, 0.2)",
                    color: "#60a5fa",
                    border: "1px solid rgba(59, 130, 246, 0.3)",
                  }}
                >
                  AI Agent
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm text-emerald-400">{agentRole}</span>
              </div>
              <p className="text-xs text-white/40 mt-0.5">Connected to {brandName} Brand Soul</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] transition-all duration-300">
            <Users className="w-5 h-5 text-white/60" />
          </button>
          <button
            onClick={() => setIsVoiceActive(!isVoiceActive)}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: isVoiceActive
                ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                : "rgba(255, 255, 255, 0.05)",
              border: isVoiceActive ? "1px solid rgba(59, 130, 246, 0.5)" : "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: isVoiceActive ? "0 4px 20px rgba(59, 130, 246, 0.4)" : "none",
            }}
          >
            <Volume2 className={`w-5 h-5 ${isVoiceActive ? "text-white" : "text-white/60"}`} />
          </button>
          <button className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] transition-all duration-300">
            <RotateCcw className="w-5 h-5 text-white/60" />
          </button>
          <button className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] transition-all duration-300">
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>
      </header>

      {/* Chat Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-8 overflow-y-auto">
        {!hasMessages ? (
          /* Empty State */
          <div className="flex flex-col items-center max-w-2xl w-full">
            <div className="mb-10">
              <AosIcon variant="single" color="cyan" size={100} />
            </div>

            <h2 className="text-3xl font-bold text-white mb-3 text-center">Start a Conversation</h2>
            <p className="text-white/50 text-center mb-10 text-lg">
              Test how {brandName}'s AI agent responds to customer inquiries.
            </p>

            {/* Suggestion Cards */}
            <div className="w-full space-y-3">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left p-5 rounded-2xl transition-all duration-300 group"
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)"
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)"
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)"
                  }}
                >
                  <p className="text-white/80 group-hover:text-white transition-colors">{suggestion}</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Messages */
          <div className="w-full max-w-3xl space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[80%] p-4 rounded-2xl"
                  style={{
                    background:
                      message.role === "user"
                        ? "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)"
                        : "rgba(255, 255, 255, 0.05)",
                    backdropFilter: message.role === "assistant" ? "blur(20px)" : "none",
                    border: message.role === "assistant" ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
                  }}
                >
                  <p className="text-white">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Input Area */}
      <div
        className="relative z-20 px-6 py-4"
        style={{
          background: "rgba(10, 10, 11, 0.8)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="flex items-center gap-3 p-2 rounded-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <input
              type="text"
              placeholder={`Message ${agentName}...`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-transparent text-white placeholder:text-white/30 outline-none py-3 px-4 text-base"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-50"
              style={{
                background: inputValue.trim()
                  ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
                  : "rgba(255, 255, 255, 0.05)",
                border: inputValue.trim() ? "1px solid rgba(59, 130, 246, 0.5)" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: inputValue.trim() ? "0 4px 20px rgba(59, 130, 246, 0.4)" : "none",
              }}
            >
              <Send className={`w-5 h-5 ${inputValue.trim() ? "text-white" : "text-white/40"}`} />
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-white/30 text-xs mt-4">Powered by Brand Soul Engine™ • {brandName} Voice AI</p>
        </div>
      </div>
    </div>
  )
}
