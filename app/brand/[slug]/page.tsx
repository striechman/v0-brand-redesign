import { BrandDashboard } from "@/components/brand-dashboard"

interface BrandPageProps {
  params: Promise<{ slug: string }>
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params

  // Convert slug back to brand name
  const brandName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .replace("And", "&")

  return <BrandDashboard brandName={brandName} />
}
