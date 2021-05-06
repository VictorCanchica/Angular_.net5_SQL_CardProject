import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listarTarjetas: any[]=[
    {titulo: 'Juan Perez', numeroTarjeta:'2424242', fechaExpiracion:'11/12', cvv:'123'},
    {titulo: 'Pedro Rodriguez', numeroTarjeta:'9393939', fechaExpiracion:'10/09', cvv:'321'}
  ];
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form=this.fb.group(
      {
        titulo:[''],
        numeroTarjeta:[''],
        fechaExpiracion:[''],
        cvv:['']
      }
    )
   }

  ngOnInit(): void {
  }
  agregarTarjeta(){
    console.log(this.form);
    console.log("this motherfucker")
  }

}
