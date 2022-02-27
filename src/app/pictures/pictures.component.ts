import { Component, OnInit } from '@angular/core';
import { ApiService } from '../generalService/api.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
  pictureData: any[] =[];

  selectedPictures: any[] = [];
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getImgData();
  }

  getImgData() {
    this._apiService.getImgData().subscribe( (data)  =>{
      this.pictureData = data.map(x => x = {...x, isSelected: false});
    })
  }

  ngAfterContentChecked() {
    this.selectedPictures = this.pictureData.filter(x => x.isSelected === true);
    
    if (this.selectedPictures && this.pictureData) {
      this.pictureData.forEach((item) => {
        let countEl: any = document.querySelector(`#image-${item.id} .picture-item-count`);
        if (countEl) {
          countEl.textContent = null;
        }
      })
      this.selectedPictures.forEach((item, index) => {
        let countEl: any = document.querySelector(`#image-${item.id}`).querySelector('.picture-item-count');
        countEl.textContent = index + 1;
      })
    }
  }
}
