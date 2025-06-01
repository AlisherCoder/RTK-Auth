import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
   reducerPath: "mainApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://keldibekov.online",
      prepareHeaders: (headers) => {
         const auth = JSON.parse(localStorage.getItem("auth-token") || "{}");

         const token = auth?.token || null;
         if (token) {
            headers.set("Authorization", `Bearer ${token}`);
         }
         return headers;
      },
   }),
   endpoints: () => ({}),
   tagTypes: ["USERS", "COMMENTS", "CENTERS", "AUTH"],
});
