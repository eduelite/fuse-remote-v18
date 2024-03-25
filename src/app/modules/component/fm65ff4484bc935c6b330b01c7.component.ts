import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector     : 'fm65ff4484bc935c6b330b01c76f349a8ac6c44946b2c1aa5d90fb7824',
    standalone   : true,
    templateUrl  : './fm65ff4484bc935c6b330b01c7.component.html',
    encapsulation: ViewEncapsulation.None,
    imports:[
       CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule,MatRadioModule, MatTableModule, MatMenuModule, YouTubePlayerModule, MatButtonModule
    ]
    
})
export class Fm65ff4484bc935c6b330b01c76f349a8ac6c44946b2c1aa5d90fb7824 
{

    @Input() data:any;
    intervalId:any = null;

    @Output() onPlayEnd:EventEmitter<any> = new EventEmitter();
    
    status:string = "None";
    /**
     * Constructor
     */
     constructor(public sanitizer:DomSanitizer){

       
     }

     
  @ViewChild('videoPlayer') videoPlayer:YouTubePlayer;

  toInt(value) {
    if (typeof value === 'string') {
        return parseInt(value);
    } else if (typeof value === 'number') {
        return parseInt(value.toString());
    } else {
        return 220; // Not a number
    }
}


  onReady(event){
      console.log("player is ready");     
  }

  onStateChange(event){
    console.log("player is state changed");
    console.log(event);
    if(event.data===0){
        //vedio play end
        this.status = 'END';
        this.videoPlayer.seekTo(0, true);
        this.pause();
        if(this.data.component.content.sections && this.data.component.content.sections.length > 0 ){
            this.data.runtime.data.currentSection = this.data.component.content.sections[0];
        }

        this.onPlayEnd.emit();
    }
 }

  play(){

    console.log("play video =====>");
    console.log(this.data);
    this.status = 'PLAY';
    
    this.videoPlayer.playVideo();
    this.intervalId = setInterval(()=>{
        let currentTime= this.videoPlayer.getCurrentTime();       
        if(this.data.component.content.sections && this.data.component.content.sections.length > 0 ){
            this.data.component.content.sections.some(section=>{
                if(section.startSecond <= currentTime && section.endSecond > currentTime){
                    this.data.runtime.data.currentSection = section;
                    return;
                }
            })       
        }
    }, 1000);

  }

  

  pause(){

    this.status = 'PAUSE';
    this.videoPlayer.pauseVideo();
    if(this.intervalId){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

  }

  SelectSection(section){

    this.data.runtime.data.currentSection = section.value;
    console.log(this.data);
    this.data.component.content.startSecond = this.data.runtime.data.currentSection.startSecond;
    this.data.component.content.endSecond = this.data.runtime.data.currentSection.endSecond;
    this.videoPlayer.seekTo(this.data.component.content.startSecond, true);
    this.pause();
    this.status="STOP";    

  }
         

}