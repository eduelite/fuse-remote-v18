import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgFor, NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { evaluate } from 'mathjs';
import {CdkDrag, CdkDragHandle} from '@angular/cdk/drag-drop';

@Component({
    selector     : 'app-calculator',
    templateUrl  : './calculator.component.html',
    styleUrls  : ['./calculator.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule, MatTableModule,MatFormFieldModule, NgIf, MatSelectModule, NgFor, MatInputModule, FormsModule,CdkDrag, CdkDragHandle]
})
export class CalculateComponent implements OnInit
{

    expression = '';
    expressionArray = [];
    screenArray = [];    
    parentheses = 0;
    ansOnScreen = false;
    ans = null;
    error = false;
    inverted = false;

    hints:string='';
    screentext:string='';
    result:string='';

    /**
     * Constructor
     */
    constructor()
    {
    }

    ngOnInit(): void {
        
    }

    defaults() {
        this.expression = '';
        this.expressionArray = [];
        this.screenArray = [];
        this.parentheses = 0;
        this.ansOnScreen = false;
        this.ans = null;
        this.error = false;
        this.inverted = false;

        this.hints='';
        this.screentext='';
        this.result='';

      }

    toggleInverted() {
        this.inverted = !this.inverted;
        console.log("inv:" + this.inverted);
      }

    adjustParentheses(num) {
        this.hints+=')'.repeat(num);
     }

     writeToScreen(mode, text) {

        if (mode == 'append') {
          if (this.error) {
            this.screenArray = [];
          }
          this.error = false;
          this.screenArray.push(text);
        } else if (mode == 'write') {
          this.screenArray = [text];
        } else if (mode == 'delete') {
          var popped = this.screenArray.pop();
          if (/[(]$/g.test(popped)) {
            this.parentheses > 0 ? this.parentheses-- : this.parentheses = 0;
            this.adjustParentheses(this.parentheses);
          }
        }
    
        this.screentext = this.screenArray.join('');
    
        if (this.inverted) {
          this.toggleInverted();
        }
      }

      addToExpression(text) {
        this.expressionArray.push(text);
        this.expression += text;
      }
    
      removeFromExpression() {
        var count = this.expressionArray.pop().length;
        this.expression = this.expression.slice(0, -count);
      }
   
      EnterClickHandler(){
        if (this.ansOnScreen) {
            this.expressionArray = [this.ans];
          }
    
          this.addToExpression(')'.repeat(this.parentheses));
    
          try {            
            evaluate(this.expressionArray.join('')).toPrecision(8);
          } catch (e) {
           this.error = true;
          }
    
          if (this.error) {
            this.defaults();
            this.error = true;
            this.writeToScreen('write', 'Syntax Error');
          } else {

            this.screentext = this.screentext.replace(/Ans/, this.ans) + ')'.repeat(this.parentheses);
            this.result = this.screentext + ' =';
            this.ans = evaluate(this.expressionArray.join('')).toPrecision(8);
            this.writeToScreen('write', this.ans.toString().replace(/(\.0+$)|(0+$)/g, ''));
            this.hints='';
    
            /*
            var el = $('#screentext');
            var newone = el.clone(true);
            el.before(newone);
            $(".animated:last").remove();
            */

            this.ansOnScreen = true;
          }
          this.parentheses = 0;
          this.expression = '';
          this.expressionArray = [];
    }

     CbnumClickHander(html, key){

      if (this.inverted) {
        this.toggleInverted();
      }
 
      if (this.ansOnScreen) {
        this.result = 'Ans = ' + this.screentext;
        this.writeToScreen('write', '');
        this.ansOnScreen = false;
      }

      this.addToExpression(key);
      this.writeToScreen('append', html);
    }

    CbopClickHandler(key, char){
       
        if (this.inverted) {
            this.toggleInverted();
        }
  
        if (this.ansOnScreen) {
          this.result = 'Ans = ' + this.screentext;
          this.writeToScreen('write', 'Ans');
          this.expression = this.ans;
          this.expressionArray = [this.ans];
          this.parentheses = 0;
          this.hints = '';
          this.ansOnScreen = false;
        }
  
        if ((/[/]$|[*]$/g.test(this.expression) && (key == '/' || key == '*'))) {
          this.screentext = this.screentext.replace(/[÷]$|[×]$/g, char);
          this.writeToScreen('write', this.screentext);
          this.removeFromExpression();
          this.addToExpression(key);
        } else if (/[+]$|[-]$/g.test(this.expression) && (key == '+' || key == '-')) {
        this.screentext = this.screentext.replace(/[+]$|[-]$/g, char);
          this.writeToScreen('write', this.screentext);
          this.removeFromExpression();
          this.addToExpression(key);
        } else {
          this.writeToScreen('append', char);
          this.addToExpression(key);
        }
  
        this.ansOnScreen = false;
    }

    CbparClickHandler(key){
        
      if (this.inverted) {
        this.toggleInverted();
      }

      if (this.ansOnScreen) {
        this.writeToScreen('write', '');
        this.ansOnScreen = false;
      }

      this.addToExpression(key);
      this.writeToScreen('append', key);

      if (key == '(') {
        this.parentheses++;
        this.adjustParentheses(this.parentheses);
      } else if (key == ')') {
        this.parentheses > 0 ? this.parentheses-- : this.parentheses = 0;
        this.adjustParentheses(this.parentheses);
      }
    }

    CbfunClickHandler(html, key1,key2){
      
      if (this.ansOnScreen) {
        this.writeToScreen('write', '');
        this.ansOnScreen = false;
      }

      if (!this.inverted) {
        this.addToExpression(key1);
      } else {
        this.addToExpression(key2);
      }

      this.writeToScreen('append', html + '(');

      this.parentheses++;
      this.adjustParentheses(this.parentheses);

      if (this.inverted) {
        this.toggleInverted();
      }
    }

    CbansClickHandler(){
        if (this.ansOnScreen) {
            this.writeToScreen('write', '');
            this.ansOnScreen = false;
          }
          if (!/[Ans]$|[0-9]$|[π]$|[e]$/g.test(this.screentext)) {
            this.addToExpression(this.ans.toString());
            this.writeToScreen('append', 'Ans');
          }
    
    }

    CbceClickHandler(){
        if (this.inverted) {
            this.toggleInverted();
          }
          if (this.ansOnScreen) {
            this.writeToScreen('write', '');
            this.ansOnScreen = false;
          }
    
          if (this.expressionArray.length) {
            this.removeFromExpression();
            this.writeToScreen('delete', '');
          }
    }

    CbrndClickHandler(){
        var key = Math.random().toPrecision(8);

        if (this.inverted) {
            this.toggleInverted();
        }
  
        if (this.ansOnScreen) {
          this.result = 'Ans = ' + this.screentext;
          this.writeToScreen('write', '');
          this.ansOnScreen = false;
        }
  
        this.addToExpression(key);
        this.writeToScreen('append', key);
     
    }

}
