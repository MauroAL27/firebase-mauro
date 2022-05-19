import { Component } from '@angular/core';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  songList:any=[];
  studioList:any;
  
  constructor(private fservice:FirestoreService) {}

  ngOnInit() {
    this.songList = this.fservice.getSongList().valueChanges();
    this.studioList = this.fservice.getStudioList().valueChanges();
  }  
}
