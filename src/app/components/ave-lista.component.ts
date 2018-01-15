import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AveService } from '../services/ave.service';
import { Ave }  from '../models/ave';
import { Zona }  from '../models/zona';

@Component({
    selector : 'ave-lista',
    templateUrl: '../views/ave-lista.component.html'
})


export class AveListComponent{
    public titulo: string;
    public ave:Ave;
    public aves: Array<Ave>;
    public zonas: Array<Zona>;
    public zona:Zona;

    constructor(
        private _aveService : AveService,
        private _route : ActivatedRoute,
        private _router: Router
    ){
        this.titulo = "Lista de aves";
        this.ave = new Ave(0,'','',0);
    }   

    ngOnInit(){
        this.getAves();
        this.getZonas();
      }


    
    getAves(){
        this._aveService.getAves().subscribe(
            result => {
                this.aves = result;
            },    
            error => {
                console.log(<any>error);
            }
        );   
    }
    
    getAve(){
        this._aveService.getAve(this.ave.nombreCientifico).subscribe(
            result => {
                this.aves= result;
            },    
            error => {
                console.log(<any>error);
            }
        );
    }

    selectZona(zona){
        this._aveService.getAvesZonas(zona).subscribe(
            result => {
                this.aves= result;
            },    
            error => {
                console.log(<any>error);
            }
        );
    }


    getZonas(){
        this._aveService.getZonas().subscribe(
            result => {
                this.zonas = result;
            },    
            error => {
                console.log(<any>error);
            }
        ); 
    }


    deleteAve(id){
        this._aveService.deleteAve(id).subscribe(
            response =>{
                this.getAves(); 
            },
            error =>{
                console.log(<any>error);
            }
        );
    }


 
}