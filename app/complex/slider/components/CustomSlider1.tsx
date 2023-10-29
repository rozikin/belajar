import { useState, useEffect } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideNavButton from "./SlideNavButton";

//external data import
const url = "https://fakestoreapi.com/products";

const CustomSlider1 = () => {
  const [products, setProducts] = useState<any[]>([]);

  const getProductFromBackend = async () => {
    const data = await fetch(url);

    const products = await data.json();

    setProducts(products);
  };

  useEffect(() => {
    getProductFromBackend();
  }, []);

  console.log(products);

  return (
    <div>
      <h1>CustomSlider1</h1>
      <br />

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={15}
        breakpoints={{
          480: { slidesPerView: 2 },
          740: { slidesPerView: 3 },
          1275: { slidesPerView: 4 },
        }}
      >
        {products.map((item) => (
          <SwiperSlide
            key={item.id}
            className="bg-red-400 !flex justify-center item-center"
          >
            <div className="border-2 border-blue-200 rounded-lg overflow-hidden w-[200px] h-[300px] flex justify-center items-center">
              <Image
                src={item.image}
                width={150}
                height={150}
                alt={item.title}
              />
            </div>
          </SwiperSlide>
        ))}

        <SlideNavButton />
      </Swiper>
    </div>
  );
};

export default CustomSlider1;
