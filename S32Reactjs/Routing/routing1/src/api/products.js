import axios from "axios";
//https://studentbackendapi.vercel.app/api/products/categories
import config from "../config/config";
const authToken = localStorage.getItem("authToken");
const getProducts = async ({limit=10,sort=JSON.stringify({createdAt:-1}),filters={}}) => {
  
  const query=`limit=${limit}&sort=${sort}&filters=${JSON.stringify(filters)}`
  const response = await axios.get(
    `${config.baseapiurl}/api/products?${query}`);
  return response;
};
const getProductById = async (id) => {
  const response = await axios.get(`${config.baseapiurl}/api/products/${id}`);
  console.log(response);
  return response;
};

const getProductCategories = async () => {
  const response = await axios.get(`${config.baseapiurl}/api/products/categories`);
  console.log(response);
  return response;
};
// const addProduct = async (data) => {
//   console.log(authToken);

//   const response = await axios.post(
//     `${config.baseapiurl}/api/products`,
//     data,

//     {
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//     }
//   );
//   return response;
// };
const addProduct = async (data) => {
  const authToken = localStorage.getItem("authToken"); // <-- move inside
  console.log("Token being sent:", authToken);
  const response = await axios.post(
    `${config.baseapiurl}/api/products`,
    data,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response;
};

const EditProduct = async (id, data) => {
 // console.log(authToken);
  const authToken=localStorage.getItem("authToken");
  const response = await axios.put(
    `${config.baseapiurl}/api/products/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response;
};
// const DeleteProduct = async (id) => {
//   console.log("Delete product called")
//   // console.log(authToken);
//   //const authToken=localStorage.getItem("authToken");
//   const response = await axios.delete(
//     `${config.baseapiurl}/api/products/${id}`,
    
//     {
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//       // withCredentials: true, 
//     }
//   );
//   return response;
// };
const DeleteProduct = async (id) => {
  const authToken = localStorage.getItem("authToken");
  const response = await axios.delete(
    `${config.baseapiurl}/api/products/${id}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response;
};

export { getProducts, getProductById, addProduct, EditProduct,DeleteProduct,getProductCategories  };
