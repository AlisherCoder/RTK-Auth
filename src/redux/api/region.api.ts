import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
   endpoints: (build) => ({
      getRegions: build.query({
         query: () => ({
            method: "GET",
            url: "/region",
         }),
      }),
   }),
   overrideExisting: false,
});

export const { useGetRegionsQuery } = extendedApi;
