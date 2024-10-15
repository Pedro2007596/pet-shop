import { Injectable } from '@angular/core';
import { AngularFireStore } from '@angular/fire/firestore';
import { Pet }from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private afs: AngularFireStore) { }
  salvarPet(pet: Pet){
    this.afs.collection('pets').add({...pet});
  }

  buscarPet(){
    return this.afs.collection('pets').snapshotChanges();
  }

  alterarPet(pet: Pet){
    return this.afs.collection('pets').doc(pet.nome).update({...pet});
  }

  deletarPet(pet: Pet){
    return this.afs.doc('pets/' + nome).delete();
  }
}
