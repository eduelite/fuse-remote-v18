import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector     : 'fm-registerId',
    standalone   : true,
    templateUrl  : './fm.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
       CommonModule, FormsModule, ReactiveFormsModule,  MatRadioModule
    ]
})
export class FMComponent
{

    @Input() data:any;
    /**
     * Constructor
     */
    constructor()
    {
    }
}
