import { Helmet } from "react-helmet";
import CEOCarousel from "../../components/CEOCarousel";
import GridView from "../../components/GridView.js";
import { CEOS } from "../../datas/data.js";

const CEOsPage = () => {
    return (
        <div>
            <Helmet>
                <title>Gafam - CEO Overview</title>
                <meta
                    name="description"
                    content="An overview of the Chief Executive Officer of the GAFAM"
                />
                <meta name="keywords" content="CEO, Leader, Chairman" />
            </Helmet>
            <CEOCarousel CEOS={CEOS} />
            <GridView CEOS={CEOS} />
        </div>
    );
};

export default CEOsPage;
