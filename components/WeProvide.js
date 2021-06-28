

const ourServices = [
  {
    id:1,
    product: 'Thali',
    image: './images/img1.jpg'
  },
  {
    id:2,
    product: 'Snax',
    image: './images/img2.jpg'
  },
  {
    id:3,
    product: 'Beverage',
    image: './images/img3.jpg'
  },
  {
    id:4,
    product: 'Chinese',
    image: './images/img4.jpg'
  },
  {
    id:5,
    product: '44',
    image: './images/img5.jpg'
  },
  {
    id:6,
    product: 'Thali',
    image: './images/img6.jpg'
  },
  {
    id:7,
    product: 'Thali',
    image: './images/img7.jpg'
  },
  {
    id:8,
    product: 'Thali',
    image: './images/img8.jpg'
  },
  {
    id:9,
    product: 'Thali',
    image: './images/img9.jpg'
  },
]


const WeProvide = () => {
  return (
    <div>

      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-6xl font-medium title-font mb-4 text-gray-900">
              Popular Food
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We provide a variety of food and beverage recipes with high taste from famous chefs
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {ourServices.map((provide) => {
              return (
                <div className="p-2 lg:w-1/2 md:w-1/2 w-full">
                  <div className="h-full flex flex-col items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="team"
                      className=" w-11/12 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                      src={provide.image}
                    />
                    <div className="flex-grow">
                      <h2 className="text-gray-900 title-font font-medium text-2xl">
                        {provide.product}
                      </h2>
                      <p className="text-gray-500"></p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware. Man bun next level coloring
              book skateboard four loko knausgaard. Kitsch keffiyeh master
              cleanse direct trade indigo juice before they sold out gentrify
              plaid gastropub normcore XOXO 90's pickled cindigo jean shorts.
              Slow-carb next level shoindigoitch ethical authentic, yr scenester
              sriracha forage franzen organic drinking vinegar.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              HOLDEN CAULFIELD
            </h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WeProvide