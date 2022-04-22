import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

//providedIn parametresi, service’ in hangi seviyede injectable olduğunu tanımlar.
// Örneğin root değeri, service’ in uygulama boyunca her yerden injecte edilebileceğini belirtir.
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44334/api/Products/getall"
  constructor(private httpCLient: HttpClient) { }

  //Bir servisten api isteği yapmak için gerekli işlem aşağıda
  //Observable =Olay takibi ve Asenkron işlemler için kullanacağımız nesnemizi içeren modüldür.
  //Subscribe olabilir bir response model dönülücek  (data’yi direk alarak(subscribe))
  getProducts(): Observable<ListResponseModel<Product>> {
    return this.httpCLient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}
