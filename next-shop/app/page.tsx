import Image from "next/image";
import {stripe} from "@/lib/stripe"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Carousel from "@/components/carousel";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return(
    <div>
      <section>
        <div>
          <div>
            <h2>Welcome to Next Shop</h2>
            <p>Your next best shop at cheaper prices</p>
            <Button asChild variant="default">

              <Link href="/products">
                Browse All Products
              </Link>
                
            </Button>
          </div>
          <Image 
          alt="Banner-image" 
          width={250} height={250} 
          src={products.data[4].images[0]}>

          </Image>
        </div>
      </section>
      <section>
        <Carousel/>
      </section>
    </div>
  )
}
