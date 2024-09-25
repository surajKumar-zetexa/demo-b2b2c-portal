import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CartDialogeComponent } from '../buysim-detailed/buysim-detailed.component';
import { Router } from '@angular/router';
import { StoreDataService } from 'src/services/store-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

public notifications:any[] =[
  {},
  {},
  {},
  {},
  {},
  {},
  {},
]

public profileData:any;

constructor(public dialog: MatDialog, public router: Router, public storeService: StoreDataService){}

ngOnInit(): void {
  // let data:any = localStorage.getItem('agent-data')
  //   if(data){
  //     this.profileData = JSON.parse(data)
  //   }else{
  //     this.router.navigate(['/login'])
  //   }
  //   console.log(this.profileData)
  //   this.getProfileData()
}

getProfileData(){
  this.storeService.userInfo.subscribe(res=>{
    if(res){
      this.profileData = res;
    }
  })
}


openCart(){
  const dialog = this.dialog.open(CartDialogeComponent, {
    panelClass: ['dilogue-custom', 'dilogue-cart', 'device-compatibility'],
    autoFocus: false
  })
  dialog.afterClosed().subscribe(result => {
    if(result){
    }
    
  })
}

logout(){
  localStorage.clear();
  this.router.navigate(['/login'])
}

openEkyc() {
  const dialog = this.dialog.open(EkycComponent, {
    panelClass: ['dilogue-custom','ekyc-dilouge'],
    autoFocus: false
  })
  dialog.afterClosed().subscribe(result => {
    if(result){
    }
    
  })
}

assistDialog(){
  const dialog = this.dialog.open(assistDialogue, {
    panelClass: ['dilogue-custom','ekyc-dilouge'],
    autoFocus: false
  })
  // dialog.afterClosed().subscribe(result => {
  //   if(result){
  //   }
    
  // })
}


}









@Component({
  selector: 'app-ekyc',
  templateUrl: './ekyc.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class EkycComponent {


  showBasicDetails: boolean = true;
  showBusinessDetails:boolean = false

  constructor(public dialogRef: MatDialogRef<CartDialogeComponent>, public dialog: MatDialog) { }


  back(){
    this.showBasicDetails = true
    this.showBusinessDetails = false
  }
  next(){
    this.showBasicDetails = false
    this.showBusinessDetails = true
  }

  close(){
    this.dialogRef.close()
  }

}

@Component({
  selector: 'app-assistDialogue',
  templateUrl: './assist-dialogue.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class assistDialogue {


  showBasicDetails: boolean = true;
  showBusinessDetails:boolean = false

  constructor(public dialogRef: MatDialogRef<CartDialogeComponent>, public dialog: MatDialog) { }

  close(){
    this.dialogRef.close()
  }
}