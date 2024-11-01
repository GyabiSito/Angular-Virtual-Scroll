import { Component, OnInit } from '@angular/core';
import { AppModule } from '../../app.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [AppModule,ScrollingModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  tabla=5;
  hasta=10;
  resultado:any[]=[];
  error=false;
  constructor() { }

  ngOnInit(): void {
  }

  calcular(){

    if(this.tabla < 0 || this.hasta < 0){
      this.error=true;
      setTimeout(()=>{
        this.error=false;
      },3000)
      return;
    }

    this.resultado=[];

    for (let i = 0; i < this.hasta; i++) {
      this.resultado.push({
        tabla:this.tabla,
        resultado:this.tabla*i
      });
    }
  }

}
