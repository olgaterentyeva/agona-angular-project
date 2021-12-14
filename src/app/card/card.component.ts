import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  title = 'My first Angular project'
  disabled = false
  imgUrl: string = 'https://habrastorage.org/webt/d2/yw/h8/d2ywh8knslm8ttn9yfoln48gpic.jpeg'

  ngOnInit(): void {
    setTimeout(() => {
      this.imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
      this.disabled = true
    }, 2000)
  }

  changeTitle() {
    this.title = 'Another title'
  }





}
