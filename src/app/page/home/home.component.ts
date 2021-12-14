import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  isShowContent:boolean = false;

  handleShowDiv(): void {
    this.isShowContent = !this.isShowContent
  }

  onSignIn(value: boolean): void {
    console.log(value)
  }

}
