import {Component} from  '@angular/core'



@Component({
  selector: 'app-email-button',
  templateUrl : './lettalk.component.html',
  styleUrls: ['./lettalk.component.css']
})


export class  EmailButton {

  popup = false;

  onClick() {
    this.popup = !this.popup;
  }
}
