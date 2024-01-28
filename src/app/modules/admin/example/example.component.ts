import { Component, ViewEncapsulation } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

@Component({
    selector     : 'example',
    standalone   : true,
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
        MatRadioModule
    ]
})
export class ExampleComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
