import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Title from "../Title";
import { addProduct, EditProduct } from "../../api/products";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../constants/route";
import Spinner from "./Spinner";

const Form = ({ products }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: products,
  });
  const isEditing = products ? true : false;
  async function submit(data) {
    setLoading(true);
    try {
      isEditing
        ? await EditProduct(products._id, data)
        : await addProduct(data);
      navigate(PRODUCT_ROUTE);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      toast(`Product ${isEditing ? "Edited" : "Added"} Successfully`, {
        type: "success",
      });
      setLoading(false);
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(submit)}
        className=" flex flex-col justify-center items-center   bg-slate-100  rounded-xl  mt-10 py-5 w-1/2 shadow-2xl"
      >
        <Title
          label={`${isEditing ? "Edit Product" : "Add Product"}`}
          className="ms-96"
        />
        <div className="w-1/2">
          <input
            type="text"
            className="border rounded-lg py-1 px-2 w-full my-2"
            {...register("name", {
              required: "name is required",
            })}
            placeholder="please enter product name "
          />
          <p className="text-red-300 text-sm mt-2">{errors.name?.message}</p>
        </div>

        <div className="w-1/2">
          <input
            type="text"
            className="border rounded-lg py-1 px-2 w-full my-2"
            {...register("brand", {
              required: "brad is required",
            })}
            placeholder="please enter product brand "
          />
          <p className="text-red-300 text-sm mt-2">{errors.brand?.message}</p>
        </div>
        <div className="w-1/2">
          <input
            type="text"
            className="border rounded-lg py-1 px-2 w-full my-2"
            {...register("category", {
              required: "category is required",
            })}
            placeholder="please enter product category "
          />
          <p className="text-red-300 text-sm mt-2">
            {errors.category?.message}
          </p>
        </div>
        <div className="w-1/2">
          <input
            type="text"
            className="border rounded-lg py-1 px-2 w-full my-2"
            {...register("description", {
              required: "description is required",
            })}
            placeholder="please enter product description "
          />
          <p className="text-red-300 text-sm mt-2">
            {errors.description?.message}
          </p>
        </div>
        <div className="w-1/2">
          <input
            type="number"
            className="border rounded-lg py-1 px-2 w-full my-2"
            {...register("price", {
              required: "price is required",
              min: {
                value: 1,
                message: "price should be greater than 0",
              },
            })}
            placeholder="please enter product price "
          />
          <p className="text-red-300 text-sm mt-2">{errors.price?.message}</p>
        </div>

        <div className="w-1/2">
          <input
            type="text"
            className="border rounded-lg py-1 px-2 w-full my-2"
            {...register("url", {
              required: "url is required",
              min: {
                value: 1,
                message: "price should be greater than 0",
              },
            })}
            placeholder="please enter product url "
          />
          <p className="text-red-300 text-sm mt-2">{errors.url?.message}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-xl font-semibold py-2 px-4 text-center  rounded-lg hover:bg-blue-300 "
        >
          {`${isEditing ? "Edit Product" : "Add Product"}`}
          {loading ? <Spinner className="w-8 h-8 inline ml-3" /> : null}
        </button>
      </form>
    </div>
  );
};

export default Form;
