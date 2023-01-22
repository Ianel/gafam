import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductCard from "../../components/ProductElement";
import { products } from "../../datas/data";
import { IProduct } from "../../pages/Companies";
import * as ROUTES from "../../constants/routes";
import { PreviousButton } from "../../components/PreviousButton";

export interface ICompanyProduct {
    logo: string;
    name: string;
    release: string;
}

const ProductPage = () => {
    const { id } = useParams();
    const [companyProducts, setCompanyProducts] = useState<IProduct>();

    useEffect(() => {
        const findProducts = products.find(
            (company: IProduct) => company.id == parseInt(id!)
        );

        setCompanyProducts(findProducts!);
    }, []);

    return (
        <div className="flex flex-col">
            <Helmet>
                <title>Gafam - Products</title>
                <meta
                    name="description"
                    content="The products that the GAFAM provide to the world"
                />
                <meta
                    name="keywords"
                    content="Gmail, App Store, Linkedin, Amazon Web Services, Facebook"
                />
            </Helmet>
            <PreviousButton route={ROUTES.COMPANY} />
            <div className="md:flex md:flex-row md:flex-wrap lg:justify-center lg:items-center lg:h-full md:gap-x-4">
                {companyProducts &&
                    companyProducts.value.map(
                        (product: ICompanyProduct, index) => {
                            return <ProductCard {...product} />;
                        }
                    )}
            </div>
        </div>
    );
};

export default ProductPage;
