import {ICarBrand} from "./carBrand.type";
import {ICarModel} from "./carModel.type";

export interface IRequestSuccess {
    brands: ICarBrand[];
    models: ICarModel[];
    yearFrom: string;
}