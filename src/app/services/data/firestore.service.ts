import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Song } from "../../song";
import { Recording_studios } from "../../recording_studios";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createSong(albumName: string, artistName: string, songDescription: string, songName: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`songList/${id}`).set({ id, albumName, artistName, songDescription, songName });
  }

  getSongList(): AngularFirestoreCollection<Song> {
    return this.firestore.collection('songList');
  }

  getSongtDetail(path: string, songId: string) {
    const value = this.firestore.collection(path);
    return value.doc(songId).valueChanges();
  }

  deleteSong(songId: string): Promise<void> {
    return this.firestore.doc(`songList/${songId}`).delete();
  }

  updateSong(albumName: string, artistName: string, songDescription: string, songName: string, id: string): Promise<void> {
    return this.firestore.doc(`songList/${id}`).update({ id, albumName, artistName, songDescription, songName });
  }

  //Studios
  createStudio(nameRecording: string, type_of_melody: string, number_of_cabins: string, owner: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`studioList/${id}`).set({ id, nameRecording, type_of_melody, number_of_cabins, owner });
  }

  getStudioList(): AngularFirestoreCollection<Recording_studios> {
    return this.firestore.collection('studioList');
  }

  getStudioDetail(path: string, studioId: string) {
    const value = this.firestore.collection(path);
    return value.doc(studioId).valueChanges();
  }

  deleteStudio(studioId: string): Promise<void> {
    return this.firestore.doc(`studioList/${studioId}`).delete();
  }

  updateStudio(nameRecording: string, type_of_melody: string, number_of_cabins: string, owner: string, id: string): Promise<void>
  { 
    return this.firestore.doc(`studioList/${id}`).update({id,nameRecording,type_of_melody,number_of_cabins,owner});
  }
}
