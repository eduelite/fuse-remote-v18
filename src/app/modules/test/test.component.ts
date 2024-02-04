import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, NgModule, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {FMComponent} from "../component/fm65bf4799b1a0bc7c6fa3d454.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
    selector     : 'test',
    standalone   : true,
    templateUrl  : './test.component.html',
    encapsulation: ViewEncapsulation.None,    
    imports:[
        FMComponent,MatButtonModule, RouterLink, MatIconModule, CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule
    ]
})
export class TestComponent implements  OnInit 
{
    /**
     * Constructor
     */
    @ViewChild('test', {read:ViewContainerRef}) testContainer!: ViewContainerRef;
  
    reactiveComponent={
        component:{
          content:{
              question: "input the question here?"
          },
          ui:{},      
        },
        runtime:{
          data:{
             
          },
          score:{},
          feedback:{}
        }
      };
  
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
