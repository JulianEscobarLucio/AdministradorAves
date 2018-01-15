import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AveService } from '../services/ave.service';
import { Ave }  from '../models/ave';
import { Pais }  from '../models/pais';

@Component({
    selector : 'ave-edit',
    templateUrl: '../views/ave-add.component.html'
})


export class AveEditComponent{
    public titulo: string;
    public ave:Ave;
    public paises: Array<Pais>;
    public aves: Array<Ave>;

    constructor(
        private _aveService : AveService,
        private _route : ActivatedRoute,
        private _router: Router
    ){
        this.titulo = "Editar  ave";
        this.ave = new Ave(0,'','',0);
    }   

    ngOnInit(){
        this.getAve();
        this.getPaises();
    }

    setNewPais(pais){
        this.ave.idPais = pais;
    }

    getAve(){
		this._route.params.forEach((params: Params) => {
			let id = params['id'];
			this._aveService.getAveId(id).subscribe(
				response => {
					this.ave = response;
				},
				error => {
					console.log(<any>error);
				}
			);
		});
    }

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
 
}