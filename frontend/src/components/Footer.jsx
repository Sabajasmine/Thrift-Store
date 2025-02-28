import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <p className='w-full md:w-2/3 text-gray-600'>
            At Thrifted Forever, we believe in fashion that’s stylish, affordable, and eco-friendly. Each thrifted piece is handpicked with love, ensuring quality and uniqueness. Join us in embracing sustainable fashion—one thrifted treasure at a time!
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li><a href="/" className="hover:text-gray-800">Home</a></li>
                <li><a href="/about" className="hover:text-gray-800">About us</a></li>
                <li><a href="/delivery" className="hover:text-gray-800">Delivery</a></li>
                <li><a href="/privacy-policy" className="hover:text-gray-800">Privacy policy</a></li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>(0422) 555-0132</li>
                <li><a href="mailto:support@thriftedforever.in" className="hover:text-gray-800">support@thriftedforever.in</a></li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ thriftedforever.com - All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
