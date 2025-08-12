import { stripe } from '@/lib/stripe';
import ProductDetail from '@/components/product-detail';

const ProductPageId = async (
    {params,}: {params: { id:  string};
}) => {
    // const  id  = await params;
    try {
        const product = await stripe.products.retrieve(params.id, {
            expand: ["default_price"],
          });
    } catch (error) {
        console.error('Error retrieving Stripe product:', error);
        // Log the specific error to your terminal
    }
      
  return (
  <ProductDetail product = {product} />
)};

export default ProductPageId
