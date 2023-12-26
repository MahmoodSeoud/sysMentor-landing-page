import Link from 'next/link'
import Image from 'next/image'
import sysMentorLogo from '/public/images/sysMentorIcon.png'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="SysMentor">
      <Image src={sysMentorLogo} alt="SysMentor" width={64} height={64} />
    </Link>
  )
}
