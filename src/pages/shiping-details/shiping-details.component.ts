import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shiping-details',
  templateUrl: './shiping-details.component.html',
  styleUrls: ['./shiping-details.component.scss']
})
export class ShipingDetailsComponent {

  public adressList:any[]=[
    {},
    {},
    {},
  ]

  constructor(public dialog: MatDialog, public router: Router ){

  }

  addAddress() {
    const dialog = this.dialog.open(AddNewAddressComponent, {
      panelClass: ['dilogue-custom'],
      autoFocus: false
    })
    dialog.afterClosed().subscribe(result => {
      if(result){
      }
      
    })
  }

  deleteAddress(){

    const dialog =  this.dialog.open(DeleteAddressComponent,{
      panelClass:'assign-dialog',
      width:'35%',
    });
    dialog.afterClosed().subscribe(result => {
      if(result){
      }
      
    })

  }

  orderSummery(){
    this.router.navigate(['/dashboard/order-summery']);
  }



}


@Component({
  selector: 'app-Add-New-Address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./shiping-details.component.scss']
})


export class AddNewAddressComponent {


    
  constructor(public dialogRef: MatDialogRef<AddNewAddressComponent>,) {

  }

  close() {
    this.dialogRef.close()
  }

}



@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./shiping-details.component.scss']
})


export class DeleteAddressComponent {


    
  constructor(public dialogRef: MatDialogRef<DeleteAddressComponent>,) {

  }

  close() {
    this.dialogRef.close()
  }

}
