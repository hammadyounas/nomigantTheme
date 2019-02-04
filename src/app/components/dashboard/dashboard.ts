import {Component,OnInit } from '@angular/core'
// import {} from './../../../assets/img/chat.png'

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.html',
    styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit{
    isCollapsed = false;
    progressVal = 50;
     items = [{
        text: 'Item2',
        items: [{ text: 'Item2.1' }, { text: 'Item2.2' }, { text: 'Item2.3' }]
    }]
    constructor(){}
    ngOnInit(){}
    title = 'Hello World!';

   onButtonClick() {
       this.title = 'Hello from Kendo UI!';
   }
}