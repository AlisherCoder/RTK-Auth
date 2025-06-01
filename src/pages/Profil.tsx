import React from "react";
import { useGetProfileQuery } from "../redux/api/auth.api";
import { useNavigate } from "react-router-dom";

const Profil = () => {
   const { data, isError } = useGetProfileQuery({});
   const navigate = useNavigate();

   if (isError) {
      navigate("/login");
   }

   return (
      <div>
         <div className='container mx-auto grid place-items-center'>
            <div className='text-2xl my-10 '>Your profile data</div>
            <div className='w-[300px] flex flex-col justify-center items-center p-4 gap-2'>
               <div className='rounded-[100%] overflow-hidden'>
                  <img className='object-cover' src={data?.img} alt='' />
               </div>
               <div className='w-full'>
                  <h1>First name: {data?.firstname}</h1>
                  <h1>Last name: {data?.lastname}</h1>
                  <p>Email: {data?.email}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default React.memo(Profil);
