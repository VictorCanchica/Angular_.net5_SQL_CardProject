import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
