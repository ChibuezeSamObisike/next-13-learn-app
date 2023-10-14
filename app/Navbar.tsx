import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className='flex mb-3 bg-slate-200 p-5'>
      <Link href='/' className='mr-5'>
        NextJS
      </Link>
      <Link href='/users'>User</Link>
    </div>
  );
};

export default NavBar;
