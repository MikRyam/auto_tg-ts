import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICarBrand} from "./types/carBrand.type";
import {IBrandModel} from "./types/brandModel.type";

export const carApi = createApi({
    reducerPath: 'api/carBrands',
    baseQuery: fetchBaseQuery({baseUrl: 'http://193.124.186.252:8956/api/'}),
    endpoints: build => ({
        getCarBrands: build.query<ICarBrand[], number>({query: () => 'brandlist'}),
        // getCarBrands: build.query<ICarBrand[], number>({query: (limit: number) => `brandlist?limit=${limit}`}),
        getBrandModels: build.query<IBrandModel[], string>({query: (id: string = '') => `modellist/${id}`})
    })
})

export const {useGetCarBrandsQuery, useGetBrandModelsQuery} = carApi;
