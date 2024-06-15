import React from 'react'

function FooterPage() {
  return (
    <div className="absolute overflow-hidden w-full bg-black ">
    <div className="">
      <div className=" relative top-40 max-md:top-20 w-full flex items-center justify-center">
        <button className="bg-gradient-to-r from-pink-500 to-violet-500 text-white py-6 px-8 rounded-sm text-xl w-5/6">
          <div className="flex justify-between lg:text-4xl">
            <p>Get Started</p>
            <p>→</p>
          </div>
        </button>
      </div>
      <div className="flex flex-row items-center -z-10 justify-center w-screen max-md:w-[115vw] -mx-5 ">
        <div className="">
          <img src="./2.png" />
        </div>
        <div className="">
          <img src="./2.png" />
          <img src="./2.png" />
        </div>
        <div>
          <img src="./2.png" />
        </div>
        <div>
          <img src="./2.png" />
          <img src="./2.png" />
        </div>
        <div>
          <img src="./2.png" />
        </div>
        <div>
          <img src="./2.png" />
          <img src="./2.png" />
        </div>
        <div>
          <img src="./2.png" />
        </div>
      </div>
    </div>
    <div className="lg:m-28 max-lg:m-8  max-lg:mt-20 flex flex-col ">
      <div className="flex max-lg:flex-col max-lg:gap-5  lg:justify-between">
        <p className="lg:text-2xl max-w-sm text-white">
          Dash dash terraUSD neo uniswap kadena helium avalanche polymath
          bancor.
        </p>
        <div className="">
          <button className=" flex mb-2 justify-end w-full hover:opacity-40 text-white">
            Looking for help ?
          </button>
          <div className="flex gap-5 max-lg:w-full">
            <input
              type="text"
              id="userInput"
              placeholder="Enter Your Email here..."
              className=" border p-4 rounded w-[20vw] max-lg:w-full"
            />
            <button className="bg-gradient-to-b from-pink-500 to-violet-500 p-4 rounded-md px-8 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className=" border-b border-white border-[2px] lg:mt-40 max-lg:mt-20" />
      <div className="flex justify-between lg:mt-10 max-lg:mt-5 text-xl text-white">
        <p>AI.GEN</p>
        <div className="flex gap-2">
          <img src="./twitter.png" alt="" className='w-6 h-6'/>
          <img src="./linkedin.png" alt="" className='w-6 h-6'/>
          <img src="./instagram.png" alt="" className='w-6 h-6'/>
          <img src="./youtube.png" alt="" className='w-6 h-6'/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FooterPage