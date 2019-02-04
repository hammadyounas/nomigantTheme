import {Component,OnInit,Input} from '@angular/core'

@Component({
    selector: 'progressbar',
    templateUrl: './progressbar.html',
    styleUrls: ['./progressbar.scss']
})
export class Progressbar   implements OnInit{
    @Input() progressVal:any 
    constructor(){}
    ngOnInit(){}
}