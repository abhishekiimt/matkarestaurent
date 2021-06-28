const Maps = () => {
  return (
    <div>
      <section className="text-gray-700 body-font relative h-screen">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14394.46672260017!2d83.8400103!3d25.5844167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x37ca107bd66375b3!2sAkash%20Sweets!5e0!3m2!1sen!2sin!4v1620478318134!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10"></div>
        </div>
      </section>
    </div>
  );
};

export default Maps;
