import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Logo from '../public/logo.png'

const Header = () => {
  return (
    <>
      {/* <h className="text-3xl font-bold underline">This is Header</h> */}
      <Link href='/'>
        <Image
          className="object-none object-right-top bg-yellow-300 object-fit"
          src={Logo}
          alt="Picture of CSS" />
      </Link>
    </>
  )
}

export default Header;