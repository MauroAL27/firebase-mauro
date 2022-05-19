import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { LoadingController, AlertController } from "@ionic/angular";
import { FirestoreService } from "../../services/data/firestore.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  public updateSongForm: any;
  song: any = {};
  songId: any;
  constructor(
    public lc: LoadingController,
    public ac: AlertController,
    public fs: FirestoreService,
    public fb: FormBuilder,
    public r: Router,
    public ar: ActivatedRoute) {
    this.updateSongForm = fb.group({
      albumName: ['', Validators.required],
      artistName: ['', Validators.required],
      songDescription: ['', Validators.required],
      songName: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.songId = this.ar.snapshot.paramMap.get('id');
  }

  async updateSong() {
    const loading = await this.lc.create();
    const albumName = this.updateSongForm.value.albumName;
    const artistName = this.updateSongForm.value.artistName;
    const songDescription = this.updateSongForm.value.songDescription;
    const songName = this.updateSongForm.value.songName;
    this.fs.updateSong(albumName, artistName, songDescription, songName, this.songId).then(
      () => {
        loading.dismiss().then(() => { this.r.navigateByUrl('/home'); });
      },
      error => {
        console.error(error);
      });
    return await loading.present();
  }
}
