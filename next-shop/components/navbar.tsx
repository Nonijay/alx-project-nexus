import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-white shadow'>
        <div className='container mx-auto flex items-center justify-around px-4 py-4'>
            <Link href="/"  className='hover:text-orange-400'>
                Next Shop
            </Link>
            <div className='hidden md:flex space-x-6'>
                <Link href="/" className='hover:text-orange-400'>Home</Link>
                <Link href="/products" className='hover:text-orange-400'>Products</Link>
                <Link href="/checkout" className='hover:text-orange-400'>Checkout</Link>
            </div>
            <div className='flex items-center space-x-4'></div>
        </div>
    </nav>
  )
}

export default Navbar
