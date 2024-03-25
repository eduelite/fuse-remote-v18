import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, NgModule, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Fm65ff4484bc935c6b330b01c76f349a8ac6c44946b2c1aa5d90fb7824,} from "../component/fm65ff4484bc935c6b330b01c7.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
    selector     : 'test',
    standalone   : true,
    templateUrl  : './test.component.html',
    encapsulation: ViewEncapsulation.None,    
    imports:[
      Fm65ff4484bc935c6b330b01c76f349a8ac6c44946b2c1aa5d90fb7824,MatButtonModule, RouterLink, MatIconModule, CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatRadioModule
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
            title: 'I SET FIRE TO HIS CAR WITHOUT HIM KNOWING! (Roblox)',
            description: '',
            videoId: 'mJQPP0v2asE',
            startSecond: 0,
            endSecond: 30,
            sections:null
          },
          ui: {
            playerWidth: 330,
            playerHeight: "220"
          }
        },
        runtime: {
          data: {
            currentSection: null
          },
          score: {},
          feedback: {}
        }
      }
                      
  
    constructor()
    {


    }

    StartTest(){

        console.log('container:' + this.testContainer);
        const fmComponentRef  = this.testContainer!.createComponent(Fm65ff4484bc935c6b330b01c76f349a8ac6c44946b2c1aa5d90fb7824);
        (fmComponentRef as any).instance.data = this.reactiveComponent;
        fmComponentRef.changeDetectorRef.markForCheck();

    }

    ngOnInit(): void {

        
        
    }
}
