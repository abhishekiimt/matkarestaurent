import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-5xl mb-4 font-bold text-gray-900">
           Matka Restaurent, The Test of Buxer
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            Perfect for a special occasion, private party or midweek treat, only
            10 minutes before from Buxer, Railway Station.
            <h3 className='text-xl mt-5'>Contact Matka Restaurent</h3>
            <p> ☎️ +91 <span className=' font-semibold'>8210439514</span></p>
            <p> 📞 +91 <span className=' font-semibold'>8227808514</span></p>
            <p> ☎️ +91 <span className=' font-semibold'>6201756440</span></p>
            <p> 📞 +91 <span className=' font-semibold'>9123150252</span></p>
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./images/img17.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
