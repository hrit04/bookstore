import { Link } from "react-router-dom"

export const Navbar=()=> {

    return (
<header class="heading d-flex grow-shrink-basis align-center">
    <div class="heading-title-icon d-flex grow-shrink-basis align-center">
        <h1 class="heading-title">
           <Link to="/" class="link cursor">
           Knowledge Point
           </Link> 
        </h1>
    </div>
    <nav class="navigation">
        <ul class="list-non-bullet">
            <li class="list-item-inline">
                <Link to="/" class="link cursor">Home</Link>
            </li>
            <li class="list-item-inline">
                <Link to="/cart" class="link cursor">Cart</Link>
            </li>
        </ul>
    </nav>
</header>
    )
}