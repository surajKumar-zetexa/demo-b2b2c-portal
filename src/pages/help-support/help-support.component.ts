import { Component } from '@angular/core';

@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.component.html',
  styleUrls: ['./help-support.component.scss']
})
export class HelpSupportComponent {

  showActive: boolean = true;
  showExpired: boolean = false;

  
  constructor(){

  }

  ngOnInit(): void {
    
  }

  
  activeCustomers(){
    this.showActive = true;
    this.showExpired = false;
    
  }
  expired(){
    this.showActive = false;
   this.showExpired = true;
  }

}
