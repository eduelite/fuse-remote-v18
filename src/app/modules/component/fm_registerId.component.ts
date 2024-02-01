import { Component, ViewEncapsulation } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

@Component({
    selector     : 'fm-registerId',
    standalone   : true,
    templateUrl  : './fm.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
        MatRadioModule
    ]
})
export class FMComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
