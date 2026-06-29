import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo.png'

function Logo() {
  return (
    <div>
        <Image src={logo} width={150} height={150} alt='kans-logo' />
    </div>
  )
}

export default Logo
