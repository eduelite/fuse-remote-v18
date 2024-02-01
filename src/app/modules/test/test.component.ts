import {AfterViewInit, Component, ViewChild, ViewContainerRef, ViewEncapsulation} from '@angular/core';
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
export class TestComponent implements AfterViewInit
{
    /**
     * Constructor
     */
    @ViewChild('test', {read:ViewContainerRef}) testContainer!: ViewContainerRef;

    fmComponentRef:any;
    data:object={};

    constructor()
    {


    }

    ngAfterViewInit(): void {

        console.log(this.testContainer);
        this.fmComponentRef = this.testContainer!.createComponent(FMComponent);
        this.fmComponentRef.instance!.data = this.data;
    }
}
