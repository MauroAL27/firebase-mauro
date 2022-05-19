import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { LoadingController, AlertController } from "@ionic/angular";
import { FirestoreService } from "../../services/data/firestore.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-update-studio',
  templateUrl: './update-studio.page.html',
  styleUrls: ['./update-studio.page.scss'],
})
export class UpdateStudioPage implements OnInit {

  public updateStudioForm: any;
  studio: any = {};
  studioId: any;

  constructor(
    public lc: LoadingController,
    public ac: AlertController,
    public fs: FirestoreService,
    public fb: FormBuilder,
    public r: Router,
    public ar: ActivatedRoute) {
    this.updateStudioForm = fb.group({
      nameRecording: ['', Validators.required],
      type_of_melody: ['', Validators.required],
      number_of_cabins: ['', Validators.required],
      owner: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.studioId = this.ar.snapshot.paramMap.get('id');
  }

  async updateStudio() {
    const loading = await this.lc.create();
    const nameRecording = this.updateStudioForm.value.nameRecording;
    const type_of_melody = this.updateStudioForm.value.type_of_melody;
    const number_of_cabins = this.updateStudioForm.value.number_of_cabins;
    const owner = this.updateStudioForm.value.owner;
    this.fs.updateStudio(nameRecording, type_of_melody, number_of_cabins, owner, this.studioId).then(
      () => {
        loading.dismiss().then(() => { this.r.navigateByUrl('/home'); });
      },
      error => {
        console.error(error);
      });
    return await loading.present();
  }

}
