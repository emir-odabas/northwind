import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

import { ProductService } from 'src/app/services/product.service';

//HttpClient ile backenddeki data ya erişim sağlıyoruz

//Dataları compenentler yönetir ve bunuda html kullanır

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
  filterText = ""

  // productResponseModel:ProductResponseModel={}
  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService) { }

  ngOnInit(): void {  //Compenent acılıdıgnda çalışan kod
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      } else {
        this.getProducts();
      }
    })

  }
  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
      this.dataLoaded = true; //Yüklendiği anda true oluyor
    })
  }


  getProductsByCategory(categoryId: number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data
      this.dataLoaded = true; //Yüklendiği anda true oluyor
    })
  }

  addToCard(product: Product) {
    // if (product.productId === 1) {
    //   this.toastrService.error("Hata", "Bu ürün sepete eklenemez")
    // } else {
    //   this.toastrService.success("sepete eklendi", product.productName)
    // }
    this.toastrService.success("sepete eklendi", product.productName)
    this.cartService.addToCart(product);
  }
}

