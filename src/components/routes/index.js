
import Categories from "../pages/categories/categories";
import Home from "../pages/home/Home";
import Products from "../pages/products/products";
const Router = [
    {
        component:Categories,
        path :"/categories",
        label :"Categories"
    },{
        component:Home,
        path :"/",
        label :"home"
    },{
        component:Products,
        path :"/products",
        label :"Products"
    }
]
export default Router