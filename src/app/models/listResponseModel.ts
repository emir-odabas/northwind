import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel {
    data: T[];
}

//Her liste modeli için generic yapı oluşturdukng update 