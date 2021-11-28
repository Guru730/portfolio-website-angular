import {Component, Input} from '@angular/core'



@Component({
  selector: 'app-email-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class Modal {

 @Input() open = false;


 emailPopupClose() {
   this.open = !this.open;
 }

}
