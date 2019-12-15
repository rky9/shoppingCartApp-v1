import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { FormControl } from '@angular/forms';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  storeProduct: any = [];
  
  productInPriceRange: any = [];
  // control: FormControl = new FormControl([0, 1000]);
  rangeSliderMinValue: number = 0;
  rangeSliderMaxValue: number = 1000;
  rangeSliderOptions: Options = {
    floor: 0,
    ceil: 1000
  };
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(item => {
      this.storeProduct = item;
      console.log('my list',item);
    });
  }



  updatedMinMaxValue() {
    this.productInPriceRange = []
    // let minValue = +(<HTMLInputElement> document.getElementById('priceMin')).value; 
    // let maxValue = +(<HTMLInputElement>document.getElementById('priceMax')).value;
    for(let i=0; i<this.storeProduct.length; i++) {
      if(this.storeProduct[i].price >= this.rangeSliderMinValue  && this.storeProduct[i].price <=this.rangeSliderMaxValue) {
        this.productInPriceRange.push(this.storeProduct[i]);
        this.productService.getFilterProduct(this.productInPriceRange); 
      }
    }
   
  }
  valueChange(e){
    console.log(this.rangeSliderMinValue)
console.log(this.rangeSliderMaxValue)
  }
}
