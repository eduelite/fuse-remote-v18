import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
import {FMComponent} from "../component/fm_registerId.component";

@Component({
    selector     : 'test',
    standalone   : true,
    templateUrl  : './test.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
        FMComponent
    ]
})
export class TestComponent implements  OnInit 
{
    /**
     * Constructor
     */
    @ViewChild('test', {read:ViewContainerRef}) testContainer!: ViewContainerRef;

    fmComponentRef:any;
    data:object={
        content:{
            question: 'this is the exmaple question?'
        },
        comoponent:{

        },
        user:{
            input:{},
            score:{},
            feedback:{}
        }
    };

    constructor()
    {


    }

    ngOnInit(): void {

        console.log(this.testContainer);
        this.fmComponentRef = this.testContainer!.createComponent(FMComponent);
        this.fmComponentRef.instance!.data = this.data;
    }
}
