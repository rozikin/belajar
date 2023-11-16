"use client"
import {useSwiper} from "swiper/react"

const SlideNavButtons = () => {

    const swiper = useSwiper();
    console.log(swiper);
    

  return (
    <div className="border-2 border-gray-200 w-fit px-2 py-1 rounded-xl mt-4 space-x-4">
        <button
        className="bg-blue-300 p-1 rounded-md"
        onClick={() => swiper.slidePrev()}>
            prev
        </button>
        <button
        className="bg-blue-300 p-1 rounded-md"
        onClick={() => swiper.slideNext()}>
            next
        </button>
    </div>
  )
}

export default SlideNavButtons