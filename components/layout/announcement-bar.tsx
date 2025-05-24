import Link from "next/link"

export function AnnouncementBar() {
  return (
    <div className="bg-[#E59D2C] text-white py-3 text-center text-sm">
      Gostou deste template?{" "}
      <Link href="/#contato" className="underline font-medium ml-1">
        Entre em contato
      </Link>
    </div>
  )
}
