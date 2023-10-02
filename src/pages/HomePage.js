// src/components/HomePage.js
import React from "react";
import FeatureProducts from "../components/FeatureProducts";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      {/* Banner  */}  
      <div
        className="bg-cover bg-no-repeat bg-center h-64 md:h-96 lg:h-120"
        style={{ backgroundImage: `url('/assets/back.jpg')`}}
      >
        {/* Content inside the banner */}
        <div className="text-white text-left pt-16 px-16 inline-block">
          <p className="text-xl md:text-2xl lg:text-xl text-black pb-8">
            Trade in offer
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-amber-600 font-bold pb-5">
            Super Value Deals
          </h1>
          <h4 className="text-xl md:text-4xl text-black pb-5">
            On all products
          </h4>
          <p className="text-xl md:text-1xl text-black pb-5">
            Save more today with Apna Fasion Store
          </p>
          <button className="bg-slate-900 px-6 py-2 border-solid border-2 border-gray-600 rounded-2xl hover:bg-slate-200 hover:text-black">
            Shop Now
          </button>
        </div>
      </div>
      
      {/* Five cards */}
      <div className="flex flex-row flex-wrap m-auto p-10 place-content-center" >
        <div className="border-lg border-2 border-gray-300 p-5 m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon1.png' alt="icons" />
           <p className="text-center">Fast Orders</p>
        </div>

        <div  className="border-lg border-2 border-gray-300 p-5 m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon2.png' alt="icons" />
           <p className="text-center">Quick Shipping</p>
        </div>

        <div  className="border-lg border-2 border-gray-300 p-5 m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon3.png' alt="icons" />
           <p>High Saves</p>
        </div>

        <div  className="border-lg border-2 border-gray-300 p-5 m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon4.png' alt="icons" />
           <p>24/7 Support</p>
        </div>

        <div  className="border-lg border-2 border-gray-300 p-5 m-5 rounded-lg">
           <img className='w-20' src='/assets/icons/icon5.png' alt="icons" />
           <p>Online Orders</p>
        </div>
      </div>

      {/* featured Products  */}
          <FeatureProducts />

      {/* What our customers say...  Section*/}
        <div className="text-center">
            <h1 className="text-4xl font-bold text-orange-600 p-4">What our customers say...</h1>
            <p>Our customers never miss a bit on providing feedback</p>
        </div>
        <div className='flex flex-wrap flex-row place-content-center m-auto pt-14'>
          <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
            <img src='/assets/blog/blog-1.jpg' alt='product' className='rounded-3xl p-2'/>
            <p className="px-4 font-serif text-zinc-700 text-sm">Some quick example text to build on the card title and make up the bulk of the cards content....</p>
            <div className="text-right pr-5 pb-2">
              <a className="text-blue-900 font-semibold font-mono cursor-pointer overflow-hidden text-sm">
              Learn more
              </a>
            </div>
          </div>
          <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
            <img src='/assets/blog/blog-2.jpg' alt='product' className='rounded-3xl p-2'/>
            <p className="px-4 font-serif text-zinc-700 text-sm">Some quick example text to build on the card title and make up the bulk of the cards content....</p>
            <div className="text-right pr-5 pb-2">
              <a className="text-blue-900 font-semibold font-mono cursor-pointer overflow-hidden text-sm">
              Learn more
              </a>
            </div>
          </div>
          <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
            <img src='/assets/blog/blog-3.jpg' alt='product' className='rounded-3xl p-2'/>
            <p className="px-4 font-serif text-zinc-700 text-sm">Some quick example text to build on the card title and make up the bulk of the cards content....</p>
            <div className="text-right pr-5 pb-2">
              <a className="text-blue-900 font-semibold font-mono cursor-pointer overflow-hidden text-sm">
              Learn more
              </a>
            </div>
          </div>
          <div className='border-2 border-gray-300 w-64 m-5 rounded-2xl'>
            <img src='/assets/blog/blog-4.jpg' alt='product' className='rounded-3xl p-2'/>
            <p className="px-4 font-serif text-zinc-700 text-sm">Some quick example text to build on the card title and make up the bulk of the cards content....</p>
            <div className="text-right pr-5 pb-2">
              <a className="text-blue-900 font-semibold font-mono cursor-pointer overflow-hidden text-sm">
              Learn more
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default HomePage;
