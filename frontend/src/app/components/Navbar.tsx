import React from 'react';
import { FaSignsPost } from "react-icons/fa6";
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className=' flex items-center justify-between text-4xl gap-2 bg-black text-white px-[30px] fixed w-full h-28 z-10'>
      <Link href="/"><FaSignsPost /></Link>
      <h1>Blogger</h1>
      <Link
        href="/pages/CreateBlog/"
        className=' bg-white text-2xl px-2 py-1 font-bold text-black rounded-xl'>
        + Create A Blog
      </Link>
    </nav>
  )
}

export default NavBar;