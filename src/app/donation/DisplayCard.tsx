import Image from "next/image"
import Link from "next/link"
import type { Charity } from "~/types"

const DisplayCard = ({ link, imgSrc, imgAlt, description }: Charity) => {
  return (
    <li className="shadow-lg p-4 min-h-40 border border-gray-200 rounded-lg">
      <Link href={link} target="_blank" className="flex flex-col gap-4">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={350}
          height={96}
          className="h-24 object-contain"
        />
        <p>{description}</p>
      </Link>
    </li>
  )
}

export default DisplayCard
