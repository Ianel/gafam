import CompanyCard from "../../components/CompanyCard/index.js";
import { PreviousButton } from "../../components/PreviousButton/index.js";
import { products } from "../../datas/data.js";
import * as ROUTES from "../../constants/routes";

export interface IProduct {
    id: number;
    company: string;
    logo: string;
    value: {
        logo: string;
        name: string;
        release: string;
    }[];
}

const ProductsPage = () => {
    return (
        <div className="flex flex-col">
            <PreviousButton route={ROUTES.HOME} />
            {products.map((product: IProduct, index: number) => {
                return (
                    <CompanyCard
                        key={product.company}
                        logo={product.logo}
                        company={product.company}
                        id={product.id}
                    />
                );
            })}
        </div>
    );
};

export default ProductsPage;
