import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, NgModule, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {FMComponent} from "../component/fm65c64e0e3d65ba0c4c96f206.component";
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
          htmltext: "<p>In this approach:</p><ul><li>We store information about the loaded remote module (such as the remote entry URL and exposed module) in <code style=\"color: var(--tw-prose-code);\">localStorage</code>.</li><li>We load the remote module dynamically using <code style=\"color: var(--tw-prose-code);\">loadRemoteModule</code>.</li><li>When we need to use the loaded module again, we retrieve the module information from <code style=\"color: var(--tw-prose-code);\">localStorage</code> and re-import the remote module dynamically using <code style=\"color: var(--tw-prose-code);\">loadRemoteModule</code>.</li></ul><p>This approach allows you to save and reload information about the loaded remote module without directly serializing the module object, which can be challenging due to the dynamic nature of module federation.</p>"
        },
        ui: {}
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
