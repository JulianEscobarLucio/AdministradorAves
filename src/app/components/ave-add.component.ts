import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AveService } from '../services/ave.service';
import { Ave }  from '../models/ave';
import { Pais }  from '../models/pais';
import { Zona }  from '../models/zona';

@Component({
    selector : 'ave-add',
    templateUrl: '../views/ave-add.component.html'
})


export class AveAddComponent{
    public titulo: string;
    public ave:Ave;
    public paises: Array<Pais>;
    public aves: Array<Ave>;
    public zonas: Array<Zona>;
    public zona:Zona;

    constructor(
        private _aveService : AveService,
        private _route : ActivatedRoute,
        private _router: Router
    ){
        this.titulo = "Crear nueva ave";
        this.ave = new Ave(0,'','',0);
    }   

    ngOnInit(){
        this.getPaises();
    }

    onSubmit(){
        this._aveService.addAve(this.ave).subscribe(
            response => {
                this.ave = new Ave(0,'','',0);
            },
            error => {
                console.log(<any>error);
                this.ave = new Ave(0,'','',0);
            }
        );

    }

    // setNewPais(pais){
    //     this.ave.idPais = pais;
    // }

    getPaises(){
        this._aveService.getPaises().subscribe(
            result => {
                this.paises = result;
            },    
            error => {
                console.log(<any>error);
            }
        );   
    }

}