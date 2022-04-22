import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';

//HttpClient ile backenddeki data ya erişim sağlıyoruz


//Bir nesnenin component özelliği taşıyabilmesi için üstüne @Component decorator’ü eklenmelidir.
// Bu decorator sayesinde meta-datalarını da tanımlayabiliriz.
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false; //Olay burda bir data koyup o datayı yönetmek


  // productResponseModel:ProductResponseModel={}
  constructor(private productService: ProductService) { }

  ngOnInit(): void {  //Compenent acılıdıgnda çalışan kod
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
      this.dataLoaded = true; //Yüklendiği anda true oluyor
    })
  }
}

