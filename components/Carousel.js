import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const SlideData = [
  {
    id: 1,
    title: "",
    image_path: "./images/img1.jpg",
  },
  {
    id: 2,
    title: "",
    image_path: "./images/img2.jpg",
  },
  {
    id: 3,
    title: "",
    image_path: "./images/img3.jpg",
  },
  {
    id: 4,
    title: "",
    image_path: "./images/img4.jpg",
  },
  {
    id: 5,
    title: "",
    image_path: "./images/img5.jpg",
  },
  {
    id: 6,
    title: "",
    image_path: "./images/img6.jpg",
  },
  {
    id: 7,
    title: "",
    image_path: "./images/img7.jpg",
  },
  {
    id: 8,
    title: "",
    image_path: "./images/img10.jpg",
  },
  {
    id: 9,
    title: "",
    image_path: "./images/img13.jpg",
  },
  
];
const Carousell = () => {
  return (
    <div>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}> 
          {SlideData.map((slide) =>{
              return(
                  <div className="max-w-7xl mx-auto flex items-center justify-items-center">
                      <img src={slide.image_path} alt={slide.title} className='h-4/6 w-full rounded-xl border-gray-700 p-10'  />
                  </div>
              )
          })}
      </Carousel>
    </div>
  );
};

export default Carousell;
