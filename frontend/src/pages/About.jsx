import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-justify'> 
              <p>Thrifted Forever was born out of a passion for sustainability and a desire to revolutionize the way people shop for pre-loved fashion. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase high-quality thrifted clothing and accessories—all from the comfort of their homes. Since our inception, we've worked tirelessly to curate a diverse selection of affordable, stylish, and sustainable thrifted fashion that caters to every taste and preference. From vintage and streetwear to classic essentials and trendy statement pieces, every item in our collection is carefully selected to ensure quality, authenticity, and individuality. At Thrifted Forever, we believe that fashion can be both stylish and sustainable. Our mission is to make thrift shopping easy, accessible, and exciting—helping you build a wardrobe that’s not only unique but also eco-conscious.</p>
              <p>♻️ Shop sustainably. Dress effortlessly. Thrift forever. ♻️</p>
              <b className='text-gray-800'>Our Mission</b>
              <p className='text-justify'>At Thrifted Forever, we believe that style and sustainability can go hand in hand. Our mission is to empower customers with choice, affordability, and eco-conscious shopping. We’re dedicated to providing a seamless thrifting experience that exceeds expectations—from browsing and ordering to delivery and beyond.</p>
              <p className='text-justify'>Join us in redefining fashion and conscious shopping—one thrifted gem at a time. ✨</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600 text-justify'>Every thrifted gem in our collection is handpicked and thoroughly inspected to ensure top-notch quality, authenticity, and sustainability. We bring you only the best in secondhand fashion!</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Effortless Shopping:</b>
            <p className=' text-gray-600 text-justify'>With our easy-to-use platform and smooth ordering process, finding and purchasing thrifted treasures has never been more convenient.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Dedicated Support:</b>
            <p className=' text-gray-600 text-justify'>Our friendly team is always here to help, making sure your thrift shopping experience is smooth, enjoyable, and hassle-free.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
