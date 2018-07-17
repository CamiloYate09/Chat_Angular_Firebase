import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
// nuestra interface
import {Mensaje} from '../interface/mensaje.interface';
import 'rxjs/add/operator/map' // solucion a map()
//importaciones para autenticacion
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';

//CLASE DE SERVICIOS
//https://github.com/angular/angularfire2/blob/master/docs/firestore/collections.md


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario: any = {};

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(user => {


      console.log('Estado del usuario: ', user);

      if (!user) {
        return;
      }
      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;

    })


  }

  //METODOS PÀRA LA AUTENTICACION CON GOOGLE O OTRAS PLATAFORMAS
  login(proveedor: string) {

    if (proveedor === 'google') {

      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } else {
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }

  }

  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }


  cargarMensajes() {
    //ordenar los mensajes por fecha// y con limit() para dejar en el chat cuantos mensajes
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc').limit(10));

    return this.itemsCollection.valueChanges()
      .map((mensajes: Mensaje[]) => {
        console.log(mensajes);
        // this.chats = mensajes;

        this.chats = [];
        for (let mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }
        return this.chats;
      })
  }

  //creando la logica
  agregarMensaje(texto: string) {
//TODO falta el UID
    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }

    //hacer la insercion en firebase

    return this.itemsCollection.add(mensaje);
  }

}
