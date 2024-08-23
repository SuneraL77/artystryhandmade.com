import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AuthInput from "../../Components/input/AuthInput";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../utils/validations";
import { loginUser } from "../../app/features/userSlice.js";
import { PulseLoader } from "react-spinners";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const [error1, setError1] = useState(null);
  const { status, error } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const onSubmit = async (values) => {
    let res = await dispatch(loginUser({ ...values }));

    if (res?.payload?.user) {
      roleBasedRedirect(res.payload);
    }
  };

  const roleBasedRedirect = (data) => {
    const intended = location.state?.from;
    if (intended) {
      navigate(intended);
    } else {
      if (data.user?.role === "admin") {
        navigate("/admin/home");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div>
      {/* header */}
      <div className="sticky top-0 w-full z-[100000]">
        <div>
          <Header />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-[100px] md:px-[50px] px-[20px] flex flex-col gap-[100px] mb-[100px]"
      >
        <div className="flex justify-center items-center w-full ">
          <div className="flex w-full md:w-fit ">
            <div className=" md:w-[500px] w-full md:py-[50px] py-[10px] bg-white shadow-xl hover:shadow-2xl transition-shadow border-[1px] border-solid border-gray-100 md:p-[25px] p-[10px] flex flex-col justify-center ">
              {/* title */}
              <div className="flex items-center justify-center">
                <span className="Nu font-[700] md:text-[30px] text-[20px] tracking-[4px]">
                  LOGIN
                </span>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col md:mt-[50px] mt-[25px] md:gap-[25px] gap-[15px] mx-[10px] ">
                  <div className="flex gap-[25px] w-full flex-col  ">
                    <div className="w-full flex flex-col gap-[10px]">
                      <AuthInput
                        name="email"
                        type="email"
                        placeholder="Enter Your Email Address"
                        register={register}
                        error={errors?.email?.message}
                      />
                    </div>

                    <div className="w-full flex flex-col gap-[10px]">
                      <AuthInput
                        name="password"
                        type="password"
                        placeholder="Please Enter Your Password"
                        register={register}
                        error={errors?.password?.message}
                      />
                    </div>
                  </div>

                  {/* button */}
                  <div className="flex flex-col  w-full gap-[15px]">
                    <div>
                      <span className="Nu font-[500] text-[16px]">
                        Don't have an account ?{" "}
                        <Link
                          to={"/register"}
                          className="font-[700] cursor-pointer hover:text-black/90"
                        >
                          Register
                        </Link>
                      </span>
                    </div>
                    <button
                      type="submit"
                      className=" md:py-[15px] py-[10px] md:px-[15px] px-[10px] bg-black text-white Nu uppercase tracking-[2px] hover:bg-black/90 hover:shadow-xl Nu w-full md:text-[18px] text-[15px]"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Login;
