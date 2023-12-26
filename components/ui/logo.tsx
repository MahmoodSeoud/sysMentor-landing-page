import Link from 'next/link'
import Image from 'next/image'

const loaderProp =({ src }: any) => {
    return src;
  }

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="SysMentor">
      <img src={'/LANDING/out/sysMentorIcon.png'} alt="SysMentor"
        width={64}
        height={64}
      />
    </Link>
  )
}
