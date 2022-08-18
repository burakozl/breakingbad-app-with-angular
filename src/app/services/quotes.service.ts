import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class QuotesService extends BaseService {

  constructor(private base:BaseService) {
    super(base.http)
   }

   getQuotes(){
    return this.base.getReq('/quotes')
   }
}
