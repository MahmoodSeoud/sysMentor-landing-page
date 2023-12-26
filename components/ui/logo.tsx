import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="SysMentor">
      <Image src={'/sysMentorIcon.png'} alt="SysMentor" width={64} height={64} />
    </Link>
  )
}
