import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
    // day 10
  name="Bruce"
  mailid="email id"
  disabledBox=true
  day=false 
  festival="christmas"
 show=false
 color="red";
emailPlaceholderText="enter id"
  enableInput(){
    this.disabledBox=false
  }
  enableInputTwo(){
    this.emailPlaceholderText="enter mail id"
  }

employee=[
{ fName:"Teresa",
  age:21,
  dept:"developer"
},
{
   fName:"Rupesh",
   age:22,
   dept:"testing"
},
{ 
  fName:"Baby",
  age:23,
  dept:"gbp"
},
{
   fName:"Moses",
   age:24,
   dept:"developer"
}
]
 getName(name){
  console.log(name);
  return name;
  }
  getN(par){
    console.log(par);
    return par;
  }
  getKeyO(){
    console.log("mouse over")
  }

  getKeyU()
  {
    console.log("button is clicked");
  }
  getKeyD()
  {
    console.log("key is down");
  }

// day 11

textcolor="pink"
bgcolor="white"
styleColor="newFont"
styleSize="changeSize"

dateExample=Date.now();

















}
