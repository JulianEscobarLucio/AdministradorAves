import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Ave } from '../models/ave';
import { GLOBAL } from './global';


@Injectable()
export class AveService{
    public url: string;

    constructor(
        public _http: HttpClient
      ){
          this.url= GLOBAL.url;
    }

    addAve(ave:Ave) : Observable<any>{
        let json = JSON.stringify(ave);
		let params = json;
		let headers = new HttpHeaders({'Content-Type':'application/json'});

		return this._http.post(this.url+'ave', params, {headers: headers});
    }
    
    getPaises(): Observable<any>{
        return this._http.get(this.url+'paises');  
    }

    getAves(): Observable<any>{
        return this._http.get(this.url+'aves'); 
    }

    getAve(nombre): Observable<any>{
        return this._http.get(this.url+'aves/'+nombre); 
    }

    getAveId(id): Observable<any>{
        return this._http.get(this.url+'aveid/'+id); 
    }

    getZonas(): Observable<any>{
        return this._http.get(this.url+'zonas'); 
    }

    deleteAve(id): Observable<any>{
        return this._http.delete(this.url+'ave/'+id);
    }

    getAvesZonas(zona): Observable<any>{
        return this._http.get(this.url+'aveszona/'+zona);
    }
}