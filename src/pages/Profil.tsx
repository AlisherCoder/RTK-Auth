import React from "react";
import { useGetProfileQuery } from "../redux/api/auth.api";

const Profil = () => {
   const { data } = useGetProfileQuery({});
   console.log(data);
   return (
      <div>
         Profil
         <div>
            <h1>{data?.firstname}</h1>
            <h1>{data?.lastname}</h1>
            <p>{data?.email}</p>
         </div>
      </div>
   );
};

export default React.memo(Profil);
