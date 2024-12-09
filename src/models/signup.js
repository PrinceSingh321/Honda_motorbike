import React from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const LoginForm = () =>{
    const { data: session } = useSession(); // Correct destructuring
  const router = useRouter();

  if (session) {
    router.replace('/homePage');
    return null; // Prevent rendering the rest of the component
  }

    return(
        <form>
        <div className="container">
         <div className="row">
         <div className="form-control mt-5 px-2 d-flex align-items justify-content">
         <div className="col-md-3">
             <input type="name" name="firstname" placeholder="Enter First Name"/>
         </div>
         <div className="col-md-3">
             <input type="name" name="firstname" placeholder="Enter Last Name"/>
         </div>
         <div className="col-md-3">
             <input type="email" name="email" placeholder="Enter Email" />
         </div>
         <div className="col-md-3">
             <input type="phone" name="phone" placeholder="Enter Mobile Number" />
         </div>
         </div>
         </div>
        </div>
     </form>
    )
}

export default LoginForm