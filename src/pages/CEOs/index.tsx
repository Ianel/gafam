import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState } from "react";
import { CEOS } from "../../datas/data.js";

const CEOsPage = () => {
    const [CEO, setCEO] = useState(CEOS);

    return (
        <div className="max-w-1/2 my-4 mx-auto">
            <h1>CEOs</h1>
            <Splide
                options={{
                    perPage: 1,
                    arrows: true,
                    pagination: false,
                    drag: "free",
                    gap: "1rem",
                }}
            >
                {CEO &&
                    CEO.map((ceo, index) => {
                        return (
                            <SplideSlide key={ceo.value}>
                                <img
                                    className="w-full h-full"
                                    src={ceo.image}
                                    alt={ceo.value}
                                />
                            </SplideSlide>
                        );
                    })}
            </Splide>
        </div>
    );
};

export default CEOsPage;
