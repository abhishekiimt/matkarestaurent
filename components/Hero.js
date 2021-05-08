import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-6xl mb-4 font-bold text-gray-900">
            Let's Start Cooking With Popular Recipes
          </h1>
          <p className="mb-8 leading-relaxed">
            Wnat to learn cook but confused how to start ? no need to worry
            again!{" "}
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://www.easycookingwithmolly.com/wp-content/uploads/2020/05/samosa-recipe.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
