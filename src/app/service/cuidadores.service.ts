import { Injectable } from '@angular/core';
import { AngularFireStore } from '@angular/fire/compat/firestore';
import { Cuidador }from '../models/cuidador';

@Injectable({
  providedIn: 'root'
})
export class CuidadoresService {

  constructor(private afs: AngularFireStore) { }
  salvarPet(cuidador: Cuidador){
    this.afs.collection('cuidadores').add({...cuidador});
  }

  buscarCuidador(){
    return this.afs.collection('cuidadores').snapshotChanges();
  }

  alterarCuidador(cuidador: Cuidador){
    return this.afs.collection('cuidadores').doc(cuidador.nome).update({...cuidador});
  }

  deletarCuidador(cuidador: Cuidador){
    return this.afs.doc('cuidadores/' + nome).delete();
  }
}
