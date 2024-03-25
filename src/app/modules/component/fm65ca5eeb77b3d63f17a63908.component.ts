import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NxApiProxyClient } from 'NxEdu/clients/api-client';

@Component({
    selector     : 'fm-65ca5eeb77b3d63f17a63908',
    standalone   : true,
    templateUrl  : './fm65ca5eeb77b3d63f17a63908.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
       CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule,MatButtonModule, MatCardModule
    ]
    
})
export class FMComponent implements OnInit
{

    @Input() data:any;
    /**
     * Constructor
     */
     constructor(
         public sanitizer:DomSanitizer,
         private apiProxyClient:NxApiProxyClient
        ){
           
        }

    ngOnInit(): void {
        if(this.data.component.content.word!==undefined || this.data.component.content.word!==null){
            this.SearchWord();
        }
    }

     SearchWord(){
         console.log("word search");
         this.apiProxyClient
         .build()
         .callAPI(this.data.constants.APIID, this.data.component.content)
         .subscribe(
             response=>{
                 this.data.runtime.data.response = response;
             }
         )


     }

}
