import IconRating from "../assets/rating.png"
import IconRatingHalf from "../assets/rating-half.png"
import ImgTemp from "../assets/temp-1.jpeg"
import IconPlay from "../assets/play-button.png"
function Banner() {
  return (
    <div className="w-full h-[600px] bg-banner bg-no-repeat bg-center bg-cover relative">
        <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"/>
    <div className="relative z-20 w-full h-full flex items-center justify-center space-x-[30px] p-4 ">
        <div className="flex flex-col items-baseline space-y-5 w-[50%]" >
            <p className="text-white bg-gradient-to-r from-red-600 to-red-300 py-2 px-3">TV Show</p>
            <div className="flex flex-col space-y-4">
                <h2 className="text-white text-[40px] font-bold ">Nghe nói em thích tôi</h2>
                <div className="flex items-center space-x-3">
                    <img src={IconRating} alt="rating" className="w-8 h-8"/>
                    <img src={IconRating} alt="rating" className="w-8 h-8"/>
                    <img src={IconRating} alt="rating" className="w-8 h-8"/>
                    <img src={IconRating} alt="rating" className="w-8 h-8"/>
                    <img src={IconRatingHalf} alt="rating" className="w-8 h-8"/>
                </div>
                <p className="text-white">
                Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.
                </p>
                <div className="flex items-center space-x-4">
                    <button className="bg-black text-white font-bold text-sm p-3">Chi tiết</button>
                    <button className="bg-red-700 text-white font-bold text-sm p-3">Xem Phim</button>
                </div>
            </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
            <div className="w-[300px] h-[400px] relative group cursor-pointer">
                <img src={ImgTemp} alt="temp" className="w-full h-full object-cover" />
                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <img src={IconPlay} alt="play" className="w-16 h-16"/>
                </div>
            </div>

        </div>
    </div>
        </div>
  )
}

export default Banner