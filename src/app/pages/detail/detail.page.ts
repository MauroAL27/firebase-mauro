import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/data/firestore.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  song: any = {};
  songId: any;

  constructor(public fs: FirestoreService,
    public r: Router,
    public ac: AlertController,
    public ar: ActivatedRoute) { }

  ngOnInit() {
    this.songId = this.ar.snapshot.paramMap.get('id');
    console.log("El id es", this.songId);
    const des_subscribir = this.fs.getSongtDetail('songList', this.songId).subscribe(result => {
      this.song = result;
      des_subscribir.unsubscribe();

    });

  }

  async deleteSong() {
    const alert = await this.ac.create({
      message: 'Estas seguro que quieres eliminar la canción', buttons: [
        {
          text: 'Cancel', role: 'cancel', handler: blah => {

            console.log('Comfirm Cancel:  blah');
          },
        },
        {
          text: 'Okay', handler: () => {
            this.fs.deleteSong(this.songId).then(() => {
              this.r.navigateByUrl('');
            });

          },
        },],
    });
    await alert.present();
  }


}
