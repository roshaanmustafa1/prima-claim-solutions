import { ScrollImage } from "@/components/shared/ScrollImage"

interface EditorialImageProps {
  src: string
  alt: string
  caption: string
}

export function EditorialImage({ src, alt, caption }: EditorialImageProps) {
  return (
    <figure className="mt-8">
      <div className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-[#e7ece3]">
        <ScrollImage src={src} alt={alt} sizes="(min-width: 1024px) 45vw, 100vw" />
      </div>
      <figcaption className="mt-3 text-xs leading-6 text-slate-500">{caption}</figcaption>
    </figure>
  )
}
