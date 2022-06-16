import Link from "next/link"
import Image from "./Image"

const Hero = () => {
  return ( 
  <div className="hero bg-gray-100 py-16">
  <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
    <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

      <div className="hero-text col-span-6">
        <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">För nya hundägare</h1>
        <hr className=" w-12 h-1 bg-orange-500 rounded-full mt-8" />
        <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">En plattform som hjälper nya hundägare med sin valp. Lär dig om hundar och följ din hunds utveckling.</p>
        <div className="get-app flex space-x-2 mt-6 justify-start">          
          <Link href="/create"><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Skapa ett konto</button></Link>
        </div>
      </div>
      <div className="hero-image col-span-6">
        <img src={"/static/dog.svg"} layout='fill'/>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero


