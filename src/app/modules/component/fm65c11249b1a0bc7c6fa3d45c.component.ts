import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
    selector     : 'fm-65c11249b1a0bc7c6fa3d45c',
    standalone   : true,
    templateUrl  : './fm65c11249b1a0bc7c6fa3d45c.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
       CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule
    ]
    
})
export class FMComponent
{

    @Input() data?:any;
    /**
     * Constructor
     */
     checkboxOptions:any=[];
    isLoading:boolean = true;

    constructor(public sanitizer:DomSanitizer){

        
    }
    ngOnInit(): void {

        this.isLoading = true;

        console.log("data4:");
        console.log(this.data);

        if(this.data!==undefined && this.data){

            if(this.data.runtime.data.answer===undefined || this.data.runtime.data.answer){
                this.data.runtime.data.answer = [];
            }
        
            Object.values(this.data.component.content.options).forEach( (option:any) => {
        
                let isCheckedValue:boolean = this.data.runtime.data.answer && this.data.runtime.data.answer.includes (option.key);
                if( isCheckedValue === null){
                    isCheckedValue = false;
                }
                console.log("option:" + option.key + "-" + isCheckedValue);

                this.checkboxOptions = [
                { 
                    key: option.key,
                    value: option.value,
                    isChecked:  isCheckedValue
        
                },
                ...this.checkboxOptions
                ];
        
            });  
            
            this.isLoading = false;
        }   
        
       
        console.log(this.checkboxOptions);


    }

    SelectChanged(option){

        console.log(option);
        console.log(this.data);
        console.log(this.data.runtime.data.answer);

        if(this.data.runtime.data.answer===undefined || this.data.runtime.data.answer===null){
            console.log("enter answer");
            this.data.runtime.data.answer = [];
        }
        console.log("after");
        console.log(this.data.runtime.data.answer);

        if(option && option.isChecked){

        if( this.data.runtime.data.answer || !this.data.runtime.data.answer.includes(option.key)){
            
            this.data.runtime.data.answer = [...this.data.runtime.data.answer, option.key];
        }

        }
        else{

        if( this.data.runtime.data.answer && this.data.runtime.data.answer.includes(option.key)){
            this.data.runtime.data.answer  = this.data.runtime.data.answer.filter(item => item !== option.key);
        }

        }
        console.log(this.data.runtime.data.answer);

    }
  
}
