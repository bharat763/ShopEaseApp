import { ABOUT_ROUTE, CART_ROUTE, CONTACT_ROUTE,  HOME_ROUTE, LOGIN_ROUTE, PAYMENT_ROUTE, PRODUCT_ROUTE, REGISTER_ROUTE, } from "./route";

const navMenu=[
    {   
        auth:true,
        label:"Home",
        route:HOME_ROUTE

    },
    {    auth:true,
        label:"About",
        route:ABOUT_ROUTE

    },
    {   auth:true,
        label:"Contact",
        route:CONTACT_ROUTE

    },
    {   auth:true,
        label:"Product",
        route:PRODUCT_ROUTE

    },
    {   auth:false,
        label:"Login",
        route:LOGIN_ROUTE

    },
    {   auth:false,
        label:"Register",
        route:REGISTER_ROUTE

    },
    {   auth:true,
        label:"cart",
        route:CART_ROUTE

    },
    {   auth:true,
        label:"payment",
        route:PAYMENT_ROUTE

    },
   
]
export default navMenu;