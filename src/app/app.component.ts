import { Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  templateKeywords:string[] = ['angular', 'how-to', 'tutorial', 'accessibility'];
  templateKeywords1:string[] = ['school', 'morning', 'that', 'ok'];
  templateKeywords2:string[] = ['kyawkyaw', 'koko', 'aungaung', 'hlahla'];

  tags:any;
index: any;
  constructor(){}
  ngOnInit(): void {

  }
  title = 'cursor-pointer';
  text:string = ''
  arrayData:any[]=[]
  inputValue:string = '';
  inputValue1:string = '';
  inputValue2:string = '';
  active:boolean=false;
  focusName:string = '';
  inputValue3:string = '';
  hide:boolean = false;
  inputTags:any;

  setData(){
      this.arrayData.push(this.text)
      this.text = ''
  }

  drop(event: CdkDragDrop<string[]>) {
    if(this.focusName === 'input1'){
      moveItemInArray(this.templateKeywords, event.previousIndex, event.currentIndex);
      this.active = true;
    }else if(this.focusName === 'input2'){
      moveItemInArray(this.templateKeywords1, event.previousIndex, event.currentIndex);
      this.active = true;
    }else if(this.focusName === 'input3'){
      moveItemInArray(this.templateKeywords2, event.previousIndex, event.currentIndex);
      this.active = true;
    }else{
      alert('plz focus your input')
    }
  }
  
  submitData(){
    if(this.focusName === 'input1'){
      if(this.active){
        const data = this.templateKeywords.splice(0,this.templateKeywords.length);
        this.templateKeywords.push(this.inputValue)
        this.inputValue = ''
      }else{
        this.templateKeywords.push(this.inputValue)
        this.inputValue = ''
      }
    }else if(this.focusName === 'input2'){
      if(this.active){
        const data = this.templateKeywords1.splice(0,this.templateKeywords1.length);
        this.templateKeywords1.push(this.inputValue1)
        this.inputValue1 = ''
      }else{
        this.templateKeywords1.push(this.inputValue1)
        this.inputValue1 = ''
      }
    }else if(this.focusName === 'input3'){
      if(this.active){
        const data = this.templateKeywords2.splice(0,this.templateKeywords2.length);
        this.templateKeywords2.push(this.inputValue2)
        this.inputValue2 = ''
      }else{
        this.templateKeywords2.push(this.inputValue2)
        this.inputValue2 = ''
      }
    }else{
      alert('plz focus your input')
    }
   
  }

  passData(data:any){
    if(this.focusName === 'input1'){
      this.templateKeywords.push(data)
    }else if(this.focusName === 'input2'){
      this.templateKeywords1.push(data)
    }else if(this.focusName === 'input3'){
      this.templateKeywords2.push(data)
    }else{
      alert('plz focus your input')
    }
    
  }

  delete(data:any,text:string){
    if(this.focusName === 'input1' && this.focusName === text){
      this.templateKeywords.splice(data,1)
    }else if(this.focusName === 'input2' && this.focusName === text){
      this.templateKeywords1.splice(data,1)
    }else if(this.focusName === 'input3' && this.focusName === text){
      this.templateKeywords2.splice(data,1)
    }else{
      alert('plz focus your input')
    }
  }

  keyDown(event:any){
    if(event.code.toLowerCase()=== 'backspace' && this.focusName === 'input1'){
      if(this.inputValue === ''){
        this.templateKeywords.pop()
      }
    }else if(event.code.toLowerCase()=== 'backspace' && this.focusName === 'input2'){
      if(this.inputValue1 === ''){
        this.templateKeywords1.pop()
      }
    }else if(event.code.toLowerCase()=== 'backspace' && this.focusName === 'input3'){
      if(this.inputValue2 === ''){
        this.templateKeywords2.pop()
      }
    }
  }

  focus(text:string){
    this.focusName = text;
  }


  handleClick(event:any,index:any,text:string){
    if(text === 'input1'){
      if(this.templateKeywords[index] !== ''){
        const exampleIndex = index+1;
        this.templateKeywords.splice(exampleIndex,0,'')
      }
    }else if(text === 'input2'){
      if(this.templateKeywords1[index] !== ''){
        const exampleIndex = index+1;
        this.templateKeywords1.splice(exampleIndex,0,'')
      }
    }else if(text === 'input3'){
      if(this.templateKeywords2[index] !== ''){
        const exampleIndex = index+1;
        this.templateKeywords2.splice(exampleIndex,0,'')
      }
    }
    // }else if(text === 'input3'){
    //   if(this.templateKeywords[index] !== ''){
    //     const exampleIndex = index+1;
    //     this.templateKeywords.splice(exampleIndex,0,'')
    //   }
    // }
  }
  // data:any[]=[]
  // text:string = ''

  // passData:any;
  // pass2Data:any;
  // pass3Data:any;

  // input2Start :any;
  // input2End:any;
  // input3Start :any;
  // input3End:any;

  // example1:boolean = false;
  // example2:boolean = false;
  // example3:boolean = false;
  
  // substring:any;
  // slice:any;
  // substring2:any;
  // slice2:any;
  // substring3:any;
  // slice3:any;

  // constructor(){}
  // ngOnInit(): void {
     
  // }

  // enterSubmit(){
  //   this.data.push(this.text)
  //   this.text = ''
  // }

  // change1(subText:any){
  //   if(subText === 'input1'){
  //     this.example1 = true;
  //     this.example2 = false;
  //     this.example3 = false
  //     const input1 = document.getElementById('myInput1') as HTMLInputElement;
  //     const input1Start:any = input1?.selectionStart;
  //     const input1End:any = input1?.selectionEnd;
  //     const text = input1.value;
  //     this.substring = text.slice(0,input1End)
  //     this.slice = text.slice(input1Start,text.length)
  //   }else if(subText === 'input2'){
  //       this.example2 = true;
  //       this.example1 = false;
  //       this.example3 = false;
  //       const input2 = document.getElementById('myInput2') as HTMLInputElement;
  //       const input2Start:any = input2?.selectionStart;
  //       const input2End:any = input2?.selectionEnd;
  //       const text2 = input2.value;
  //       this.substring2 = text2.slice(0,input2End)
  //       this.slice2 = text2.slice(input2Start,text2.length)
  //   }else if(subText === 'input3'){
  //       this.example3 = true;
  //       this.example1 = false;
  //       this.example2 = false;
  //       const input3 = document.getElementById('myInput3') as HTMLInputElement;
  //       const input3Start:any = input3?.selectionStart
  //       const input3End:any = input3?.selectionEnd
  //       const text3 = input3.value;
  //       this.substring3 = text3.slice(0,input3End)
  //       this.slice3 = text3.slice(input3Start,text3.length)
  //   }
  // }

  // dataClick(data:any){
  //   if(this.example1 && !this.example2 && !this.example3){
  //     const textData = this.substring + data + this.slice
  //     this.passData = textData
  //   }
  //   if(this.example2 && !this.example1 && !this.example3){
  //     const text2Data = this.substring2 + data + this.slice2
  //     this.pass2Data = text2Data
  //   }
  //   if(this.example3 && !this.example1 && !this.example2){
  //     const text3Data = this.substring3 + data + this.slice3
  //     this.pass3Data = text3Data
  //   }
  // }



  // enter:string = ''
  // listData:any[]=[]
  // focusName:string = ''
  // name:any;

  // submit(){
  //   this.listData.push(this.enter)
  //   this.enter = ''
  // }


  // focus(text:any){
  //   this.focusName = text;
  //   const input = document.getElementById(text) as HTMLInputElement;
  //   const selectionStart = input?.selectionStart;
  //   const selectionEnd = input?.selectionEnd;
  //   const value = input?.value;
  //   return {selectionEnd,selectionStart,value}
  // }


  // setData(data:any){
  //   this.name = this.focus(this.focusName)
  //   const input = document.getElementById(this.focusName) as HTMLInputElement;
  //   const substring = this.name.value.slice(0,this.name.selectionEnd)
  //   const slice = this.name.value.slice(this.name.selectionStart,this.name.value.length)
  //   input.value = substring + data + slice
  // }

  handleChange(event:any,index:any,text:string){
    if(text === 'input1'){
      this.inputTags =  event.target.value;
      this.templateKeywords.slice(index,index+1)
    }else if(text === 'input2'){
      this.inputTags =  event.target.value;
      this.templateKeywords1.slice(index,index+1)
    }else if(text === 'input3'){
      this.inputTags =  event.target.value;
      this.templateKeywords2.slice(index,index+1)
    }
  }

  handleSubmit(index:any,text:string){
    if(text === 'input1'){
      this.templateKeywords[index] = this.inputTags;  
    }else if(text === 'input2'){
      this.templateKeywords1[index] = this.inputTags;  
    }else if(text === 'input3'){
      this.templateKeywords2[index] = this.inputTags;  
    }
  }
}