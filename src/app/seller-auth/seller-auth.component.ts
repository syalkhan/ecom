import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { SellerService } from '../service/seller.service';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.scss'
})
export class SellerAuthComponent {

  constructor(private seller:SellerService){}

  ngInit(){
  }
  signUp(formData: any){
    console.warn(formData);
    this.seller.seller(formData).subscribe((data)=>{
      console.warn(data);
    })

    
}


}
