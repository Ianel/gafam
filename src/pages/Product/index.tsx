import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
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
    const navigate = useNavigate();
    const { id } = useParams();
    const [companyProducts, setCompanyProducts] = useState<IProduct>();

    useEffect(() => {
        const findProducts = products.find(
            (company: IProduct) => company.id == parseInt(id!)
        );

        setCompanyProducts(findProducts!);
    }, []);

    return (
        <div className="flex flex-col h-screen">
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
