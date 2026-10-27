import Link from "next/link"
import Image from "next/image"
import { brandAssets } from "@/config/branding"

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" aria-label="Prime Claim Solutions home" className="inline-flex shrink-0 items-center">
      <Image
        src={inverse ? brandAssets.footer : brandAssets.header}
        alt="Prime Claim Solutions"
        width={504}
        height={91}
        priority={!inverse}
        className="h-auto w-[190px] sm:w-[240px] xl:w-[260px]"
      />
    </Link>
  )
}
