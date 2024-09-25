import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent {


  public orderList:any[] = [
    {},
    {},
  ]

  constructor(public dialog : MatDialog){}

  
  shareEsim(){

    const dialog =  this.dialog.open(SuccessDialogeComponent,{
      panelClass:'assign-dialog',
      width:'35%',
    });
    dialog.afterClosed().subscribe(result => {
      if(result){
      }
      
    })

  }

}



@Component({
  selector: 'app-success-dialoge',
  templateUrl: './success-dialoge.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class SuccessDialogeComponent {

    
  constructor(public dialogRef: MatDialogRef<SuccessDialogeComponent>,) {

  }

  close() {
    this.dialogRef.close()
  }

  

}
