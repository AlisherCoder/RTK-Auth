import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
   endpoints: (build) => ({
      getProfile: build.query({
         query: (params) => ({
            method: "GET",
            url: "/auth/me",
            params,
         }),
         providesTags: ["AUTH"],
      }),

      sendOtp: build.mutation({
         query: (body) => ({
            method: "POST",
            url: "/auth/send-otp",
            body,
         }),
      }),

      verifyOtp: build.mutation({
         query: (body) => ({
            method: "POST",
            url: "/auth/verify-otp",
            body,
         }),
      }),

      register: build.mutation({
         query: (body) => ({
            method: "POST",
            url: "/auth/register",
            body,
         }),
      }),

      login: build.mutation({
         query: (body) => ({
            method: "POST",
            url: "/auth/login",
            body,
         }),
      }),
   }),
   overrideExisting: false,
});

export const {
   useGetProfileQuery,
   useSendOtpMutation,
   useVerifyOtpMutation,
   useRegisterMutation,
   useLoginMutation,
} = extendedApi;
