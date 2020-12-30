import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../model/pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpRequest:HttpClient) { }

  addPets(pet:Pet):Observable<any>{
    return this.httpRequest.post("https://petmanager-be.herokuapp.com/pet/add",pet);
  }

  getAllPets():Observable<any>{
    return this.httpRequest.get("https://petmanager-be.herokuapp.com/pet/All");
}

  getPet(ID:number):Observable<any>{
    return this.httpRequest.get(`https://petmanager-be.herokuapp.com/pet/${ID}`);
  }

  updatePet(pet:Pet,id:number):Observable<any>{
   return  this.httpRequest.put(`https://petmanager-be.herokuapp.com/pet/update/${id}`,pet);

  }

  deletePet(id:number):Observable<any>{
    return this.httpRequest.delete(`https://petmanager-be.herokuapp.com/pet/${id}`);
  }

}
