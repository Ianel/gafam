import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../../styles.css";

// import required modules

import { EffectCards } from "swiper";

export interface ICEO {
    company: string;
    value: string;
    image: string;
    nationality: string;
}

export interface ICEOS {
    CEOS: ICEO[];
}

const CEOCarousel = ({ CEOS }: ICEOS) => {
    return (
        <div className="h-[90vh] w-full flex justify-center items-center md:hidden">
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {CEOS &&
                    CEOS.map((ceo: ICEO, index: number) => {
                        return (
                            <SwiperSlide
                                className="even:bg-sky-700 odd:bg-green-700"
                                key={ceo.value}
                            >
                                <img
                                    src={ceo.image}
                                    alt={ceo.value}
                                    loading="lazy"
                                />
                                <h3 className="font-bold mt-4">{ceo.value}</h3>
                                <p className="my-3 text-red-700 text-sm">
                                    {ceo.company}
                                </p>
                                <p className="text-sm">
                                    <span className="text-gray-700 underline">
                                        Nationality:{" "}
                                    </span>
                                    <span className="text-gray-300">
                                        {ceo.nationality}
                                    </span>
                                </p>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
};

export default CEOCarousel;
