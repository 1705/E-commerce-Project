import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  standalone: false,
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit {
productList:undefined | product[];
productMessage:undefined | string;
icon=faTrash;
editIcon=faEdit;
  constructor(private productService:ProductService){ }

  ngOnInit(): void {
    this. list();
  }

  deleteProduct(id:number){
    console.warn("test id", id)
  
    this.productService.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="Product is deleted";
        this. list();
      }
    })

    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  list(){
    this.productService.productList().subscribe((result) =>{
      console.warn(result);
      if(result){
        this.productList=result;
      }
    })
  }
}

