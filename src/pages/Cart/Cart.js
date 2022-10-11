
import { Fragment } from "react";
import { Navbar, ProductCardHorizantal } from "../../components"
import { useCart } from "../../context/cart-context"
import './Cart.css'
export const Cart = () => {

    const { cart } = useCart();
    return (
        <Fragment>
            <Navbar />

            <main className="main">{
                cart && cart.length > 0 ? <h2> Your Cart ({cart.length}) items</h2> :
                    <h2> Your Cart is empty</h2>
                }
                <div className="main-cart d-flex direction-column gap">
                    {
                        cart && cart.length > 0 ? cart.map(product => <ProductCardHorizantal key={product.id} product={product}/>) : ""
                    }

                </div>
            </main>
        </Fragment>

    )

}