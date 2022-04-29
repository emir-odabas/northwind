import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

//providedIn parametresi, service’ in hangi seviyede injectable olduğunu tanımlar.
// Örneğin root değeri, service’ in uygulama boyunca her yerden injecte edilebileceğini belirtir.
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44334/api/Categories/getall";
  constructor(private httpCLient: HttpClient) { }

  // Bir servisten api isteği yapmak için gerekli işlem aşağıda

  // Observable şunun için kullanılır; Örneğin bir servise “get” yaptığınızda o servisi sadece izlersiniz. 
  // Yani observal olur. Ne zaman siz bu servisin sonunda subscribe (abone) olursunuz, işte o zaman servise bağlanmış olursunuz.
  //  Geriye sadece response kullanarak içerideki dataya ulaşmanız kalır.

  //  Observable =Olay takibi ve Asenkron işlemler için kullanacağımız nesnemizi içeren modüldür.

  //  Subscribe olabilir bir response model dönülücek  (data’yi direk alarak(subscribe))
  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpCLient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
