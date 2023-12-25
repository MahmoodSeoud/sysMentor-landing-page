import Link from 'next/link'
import Image from 'next/image'
import sysMentorLogo from '@/public/images/sysMentorIcon.png'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={sysMentorLogo} alt="Cruip" width={32} height={32} />
    </Link>
  )
}
