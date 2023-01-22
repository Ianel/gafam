import Carousel from "../../components/Carousel.js";
import GridView from "../../components/GridView.js";
import { CEOS } from "../../datas/data.js";

const CEOsPage = () => {
    return (
        <>
            <Carousel CEOS={CEOS} />
            <GridView CEOS={CEOS} />
        </>
    );
};

export default CEOsPage;
