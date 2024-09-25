import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddCustomerDialog } from '../customer-management/customer-management.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





export interface PeriodicElement {
  transactionDate:string,
  transactionId:string,
  sourcePlatform:string,
  amount:string,
  status:string
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {transactionDate:'18 OCT, 2:00 AM ', transactionId:'566478798',sourcePlatform:'phonepe', amount:'$100 USD', status:'Pending'},
  {transactionDate:'24 OCT, 3:30 AM ', transactionId:'789640006',sourcePlatform:'gpay', amount:'$100 USD', status:'Pending'},
  {transactionDate:'26 DEC, 3:30 AM ', transactionId:'9971078757',sourcePlatform:'paytm', amount:'$100 USD', status:'Pending'},
  {transactionDate:'27 DEC, 4:00 AM ', transactionId:'165878598',sourcePlatform:'phonepe', amount:'$100 USD', status:'Failure'},
  {transactionDate:'30 DEC, 5:30 AM ', transactionId:'1147657879',sourcePlatform:'phonepe', amount:'$100 USD', status:'Pending'},
  {transactionDate:'31 DEC, 9:00 AM ', transactionId:'346567085',sourcePlatform:'gpay', amount:'$100 USD', status:'Failure'},
]

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {



  displayedColumns: string[] = ['transactionDate', 'sourcePlatform', 'amount', 'status',];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  savedDataForm: any;
  addCardForm: any;
  savedFormData: any;

  constructor(public dialog: MatDialog){}

  ngOnInit():void{
    // const savedData = localStorage.getItem('formData');
    // if(savedData){
    //   this.savedDataForm = JSON.parse(savedData)
    // }
  }

  
  receiveFormData(formData: any) {
    this.savedFormData = formData;
    console.log(this.savedFormData)
  }


  addCard(){
    const dialog = this.dialog.open(AddCardDetailsComponent, {
      panelClass: ['dilogue-custom'],
      autoFocus: false
    })
    dialog.afterClosed().subscribe(result => {
      if(result){
        this.savedDataForm = result
        console.log(this.savedDataForm)
      }
      
    })
  }


  addMoney(){
    const dialog = this.dialog.open(AddMoneyComponent, {
      panelClass: ['dilogue-custom'],
      autoFocus: false
    })
    dialog.afterClosed().subscribe(result => {
      if(result){
      }
    })
  }

  formatCardNumber(cardNumber: string): string {
    if (!cardNumber) return '';
    return 'X'.repeat(12) + cardNumber.slice(-4)
      .replace(/(.{4})/g, '$1 '); // Inserting a space after every 4 characters
  }
}






@Component({
  selector: 'app-add-card-details',
  templateUrl: './add-card-details.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class AddCardDetailsComponent {

  addCardForm!: FormGroup

  @Output() formDataSaved: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<AddCardDetailsComponent>, public fb:FormBuilder ) {

  }
 

  ngOnInit(): void{
    this.addCardForm = this.fb.group({
      cardNumber:['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryMonth:['', Validators.required],
      expiryYear:['', Validators.required],
    })

    console.log(this.formDataSaved)
  }

  close() {
    this.dialogRef.close()
  }

  addDetails(){
   
    if(this.addCardForm.valid){
      console.log(this.addCardForm)
      // localStorage.setItem('formData', JSON.stringify(this.addCardForm.value))
    
      this.dialogRef.close(this.addCardForm.value);
      this.addCardForm.reset();
      console.log(this.formDataSaved)
    }
  }





  

}



@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class AddMoneyComponent {


  constructor(public dialogRef: MatDialogRef<AddMoneyComponent>,public dialog: MatDialog  ) {

  }

  close() {
    this.dialogRef.close()
  }

  selectBank(){
    const dialog = this.dialog.open(SelectBankComponent, {
      panelClass: ['dilogue-custom','select-bank-dialoge'],
      autoFocus: false
    })
    dialog.afterClosed().subscribe(result => {
      if(result){
      }
    })
  }

}




@Component({
  selector: 'app-select-bank',
  templateUrl: './select-bank.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class SelectBankComponent {


  constructor(public dialogRef: MatDialogRef<SelectBankComponent>,  ) {

  }

  close() {
    this.dialogRef.close()
  }

}
