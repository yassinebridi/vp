import { Button } from "@chakra-ui/react";
import { LoginForm } from "@components";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export interface LoginProps {}
const LoginPage: React.FC<LoginProps> = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 text-gray-900 sm:px-6 lg:px-8 dark:text-gray-50 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h1 className="mt-6 uppercase text-4xl font-extrabold text-blue-500 text-center">
            Dashy
          </h1>
          <h2 className="mt-6 text-2xl font-bold text-center">
            Sign in to your account
          </h2>
        </div>

        {/* <div className="flex flex-col text-center sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:mt-5 lg:mt-0 sm:space-x-4"> */}
        {/*   <Button */}
        {/*     colorScheme="gray" */}
        {/*     variant="outline" */}
        {/*     className="items-center justify-center flex-auto shadow-sm" */}
        {/*     onClick={() => { */}
        {/*       window.location.href = `${ */}
        {/*         import.meta.env.VITE_PUBLIC_SERVER_URL */}
        {/*       }/auth/facebook`; */}
        {/*     }} */}
        {/*   > */}
        {/*     <FaFacebook className="w-5 h-5 mr-2 -ml-1 text-gray-600 dark:text-gray-400" /> */}
        {/*     <span className="text-gray-600 dark:text-gray-400">Facebook</span> */}
        {/*   </Button> */}

        {/*   <Button */}
        {/*     variant="outline" */}
        {/*     className="shadow-sm" */}
        {/*     onClick={() => { */}
        {/*       window.location.href = `${ */}
        {/*         import.meta.env.VITE_PUBLIC_SERVER_URL */}
        {/*       }/auth/google`; */}
        {/*     }} */}
        {/*   > */}
        {/*     <FaGoogle className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400 sm:-ml-1 sm:mr-0 sm:-ml-0" /> */}
        {/*     <span className="text-gray-600 dark:text-gray-400 sm:hidden"> */}
        {/*       Google */}
        {/*     </span> */}
        {/*   </Button> */}
        {/* </div> */}

        {/* <p className="text-sm text-center text-gray-500 dark:text-gray-400"> */}
        {/*   Or continue with */}
        {/* </p> */}

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
