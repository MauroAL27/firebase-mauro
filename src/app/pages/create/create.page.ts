import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { LoadingController, AlertController } from "@ionic/angular";
import { FirestoreService } from "../../services/data/firestore.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public createSongForm: any;
  public createStudioForm: any;

  constructor(public lc: LoadingController,
    public ac: AlertController,
    public fs: FirestoreService,
    public fb: FormBuilder,
    public r: Router) {

    this.createSongForm = fb.group({
      albumName: ['', Validators.required],
      artistName: ['', Validators.required],
      songDescription: ['', Validators.required],
      songName: ['', Validators.required],
    });

    this.createStudioForm = fb.group({
      nameRecording: ['', Validators.required],
      type_of_melody: ['', Validators.required],
      number_of_cabins: ['', Validators.required],
      owner: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  async createSong() {
    const loading = await this.lc.create();
    const albumName = this.createSongForm.value.albumName;
    const artistName = this.createSongForm.value.artistName;
    const songDescription = this.createSongForm.value.songDescription;
    const songName = this.createSongForm.value.songName;
    this.fs.createSong(albumName, artistName, songDescription, songName).then(
      () => {
        loading.dismiss().then(() => { this.r.navigateByUrl('/home'); });
      },
      error => {
        console.error(error);
      });
    return await loading.present();
  }

  async createStudio() {
    const loading = await this.lc.create();
    const nameRecording = this.createStudioForm.value.nameRecording;
    const type_of_melody = this.createStudioForm.value.type_of_melody;
    const number_of_cabins = this.createStudioForm.value.number_of_cabins;
    const owner = this.createStudioForm.value.owner;
    this.fs.createStudio(nameRecording, type_of_melody, number_of_cabins, owner).then(
      () => {
        loading.dismiss().then(() => { this.r.navigateByUrl('/home'); });
      },
      error => {
        console.error(error);
      });
      console.log(nameRecording)
    return await loading.present();
  }
}
