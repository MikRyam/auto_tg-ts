import {configureStore} from "@reduxjs/toolkit";
import {carApi} from "./car/car.api";
import brandReducer from './car/slices/brandSlice';
import modelReducer from './car/slices/modelSlice';
import modelOptionReducer from './car/slices/modelOptionSlice';
import yearFromReducer from './car/slices/yearFromSlice';
import requestSuccessReducer from './car/slices/requestSuccessSlice';

export const store = configureStore({
    reducer: {
        [carApi.reducerPath]: carApi.reducer,
        brands: brandReducer,
        models: modelReducer,
        modelsOptions: modelOptionReducer,
        yearFrom: yearFromReducer,
        requestSuccess: requestSuccessReducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(carApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch