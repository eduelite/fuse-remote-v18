import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, NgModule, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {FMComponent} from "../component/fm65fa5e8fbc935c6b330b01c2.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
    selector     : 'test',
    standalone   : true,
    templateUrl  : './test.component.html',
    encapsulation: ViewEncapsulation.None,    
    imports:[
        FMComponent,MatButtonModule, RouterLink, MatIconModule, CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatRadioModule
    ]
})
export class TestComponent implements  OnInit 
{
    /**
     * Constructor
     */
    @ViewChild('test', {read:ViewContainerRef}) testContainer!: ViewContainerRef;
  
    reactiveComponent={
        component: {
          content: {
            colNames: [
              "id",
              "name",
              "age",
              "city"
            ],
            data: [
              {
                "id": 1,
                "name": "John",
                "age": 30,
                "city": "New York"
              },
              {
                "id": 2,
                "name": "Alice",
                "age": 25,
                "city": "Los Angeles"
              },
              {
                "id": 3,
                "name": "Bob",
                "age": 35,
                "city": "Chicago"
              }
            ]
          },
          ui: {}
        },
        runtime: {
          data: {},
          score: {},
          feedback: {}
        }
      }
                      
  
    constructor()
    {


    }

    StartTest(){

        console.log('container:' + this.testContainer);
        const fmComponentRef  = this.testContainer!.createComponent(FMComponent);
        (fmComponentRef as any).instance.data = this.reactiveComponent;
        fmComponentRef.changeDetectorRef.markForCheck();

    }

    ngOnInit(): void {

        
        
    }
}
