import CEOCarousel from "../../components/CEOCarousel";
import GridView from "../../components/GridView.js";
import { CEOS } from "../../datas/data.js";

const CEOsPage = () => {
    return (
        <>
            <CEOCarousel CEOS={CEOS} />
            <GridView CEOS={CEOS} />
        </>
    );
};

export default CEOsPage;
