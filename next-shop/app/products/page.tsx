import {stripe} from "@/lib/stripe"
import ProductList from "@/components/product-list";
import Carousel from "@/components/carousel";


const productsPage = async () => {
    const products = await stripe.products.list({
        expand: ["data.default_price"],
    });
    return (
        <div className="pb-8">
            <h1 className="text-3xl font-bold leading-none tracking-tight text-orange-400 text-center mb-8 mt-8">
                Featured Products {" "}
            </h1>
            <section className="py-8">
                <Carousel products = {products.data} />
            </section>
            <h1 className="text-3xl font-bold leading-none tracking-tight text-orange-400 text-center mb-8 mt-8">
                All Products {" "}
            </h1>
            <ProductList products={products.data}/>
        </div>
    )
}

export default productsPage