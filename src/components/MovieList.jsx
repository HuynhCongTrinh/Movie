import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types";
import { MovieContext } from "../context/MovieProvider";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function MovieList({ title, data }) {
  const { handleTrailer } = useContext(MovieContext);
  return (
    <div className="text-white p-2 ml-20 mb-10">
      <h2 className=" uppercase text-xl mb-4 ">{title}</h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {data && data.length > 0 &&
          data.map((item) => {
            return (
              <div key={item.id} onClick={() => handleTrailer(item.id)}>
                <div className="w-[200px] h-[300px] relative group ">
                  <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40 " />
                    <img
                      src={`${import.meta.env.VITE_IMG_URL}/${
                        item.poster_path
                      }`}
                      alt={item.title}
                      className="w-full h-full object-cover  "
                    />
                    <div className="absolute bottom-4 left-2">
                      <p className="uppercase text-md ">
                        {item.title || item.original_title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Carousel>
   
    </div>
  );
}
MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieList;
