import { Suspense } from "react"
import { SearchHome } from "@/components/search-home"

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <SearchHome />
    </Suspense>
  )
}
