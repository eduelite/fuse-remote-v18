import { Component, ViewEncapsulation } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
@Component({
    selector     : 'fillinblank',
    standalone   : true,
    templateUrl  : './fillinblank.component.html',
    imports:[
        MatInputModule, MatFormFieldModule, MatChipsModule
    ],
    encapsulation: ViewEncapsulation.None,
})
export class FillinblankComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
