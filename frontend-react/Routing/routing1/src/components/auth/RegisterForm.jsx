import React, { useState } from "react";
import { EMAIL_REGEX, PASSWROD_REGEX } from "../../constants/regex";
import { useForm } from "react-hook-form";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { BiSolidShow } from "react-icons/bi";
import { FaRegEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../reducer/auth/AuthAction";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showpassword, setshowpassword] = useState(false);
  const password = watch("password");
  const dispatch=useDispatch()
  async function submit(data){
    // setLoading(true)
  try {
 dispatch(RegisterUser(data))
 
  } catch (error) {
    console.log(error)
    // setLoading(false)
  }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className= " px-y py-1 bg-gray-200 p-10 rounded-xl space-y-3  w-96 "
      >
        <div className="">
          <input
            type="text"
            className="border rounded-lg py-1 px-2 w-full m-y-2"
            {...register("name", {
              required: "name is required",
            })}
            placeholder="pleasle Eneter name"
          />
          <p className="text-red-300 text-sm mt-2">{errors.name?.message}</p>
        </div>
        <div className="">
          <input
            type="number"
            className="border rounded-lg py-1 px-2 w-full m-y-2"
            {...register("phone", {
              required: "phone is required",
            })}
            placeholder="pleasle Eneter phone"
          />
          <p className="text-red-300 text-sm mt-2">{errors.phone?.message}</p>
        </div>
        <div className="">
          <input
            type="text"
            className="border rounded-lg py-1 px-2 w-full m-y-2"
            {...register("address", {
              required: "address is required",
            })}
            placeholder="pleasle Eneter address"
          />
          <p className="text-red-300 text-sm mt-2">{errors.address?.message}</p>
        </div>

        <div className="">
          <input
            type="email"
            className="border rounded-lg py-1 px-2 w-full m-y-2"
            {...register("email", {
              required: "email is required",

              pattern: {
                value: EMAIL_REGEX,
                message: "email  required example@gmail.com ",
              },
            })}
            placeholder="please Enter ypur email"
          />
          <p className="text-red-300 text-sm mt-2">{errors?.email?.message}</p>
        </div>
        <div className="relative">
          <input
            type={`${showpassword ? "text" : "password"}`}
            className="border rounded-lg py-1 px-2 w-full m-y-2"
            {...register("password", {
              required: "password is required",

              // minLength:{
              //     value:8,
              //     message:"password should be greater than 8"
              // },
              pattern: {
                value: PASSWROD_REGEX,
                message: "At least one upper,lowercase and special character",
              },
            })}
            placeholder="please enter  password"
          />
          <button
            className="absolute top-4 right-4"
            onClick={() => setshowpassword(!showpassword)}
          >
            {showpassword ? <BiSolidShow /> : <FaRegEyeSlash />}
          </button>
          <p className="text-red-300 text-sm mt-2">
            {errors.password?.message}
          </p>
        </div>
        <div className="relative">
          <input
            type={`${showpassword ? "text" : "password"}`}
            className="border rounded-lg py-1 px-2 w-full my-2"
            {...register("confirmPassword", {
              required: "confirmPassword is required",
              validate:(value)=>{
                return value===password|| "password and confirm passwrd does not match"
              }

            })}
            placeholder="please enter  confirmpassword"
          />
          <button
            className="absolute top-4 right-4"
            onClick={() => setshowpassword(!showpassword)}
          >
            {showpassword ? <BiSolidShow /> : <FaRegEyeSlash />}
          </button>
          <p className="text-red-300 text-sm mt-2">
            {errors.confirmPassword?.message}
          </p>
        </div>
        <div className="flex">
          <FaFacebookF className="text-2xl text-blue-500 ms-10" />
          <FaTwitter className="text-2xl text-blue-500 ms-10" />
          <FaGoogle className="text-2xl text-blue-500 ms-10" />
        </div>

        <button className="bg-blue-500 inline text-xl font-semibold py-2 px-4 rounded-lg hover:bg-blue-300 ml-18">
          Register
          {/* { loading?<Spinner  className='w-8 h-8 inline ml-3'/>:null} */}
        </button>
      </form>
    </>
  );
};
export default RegisterForm;
