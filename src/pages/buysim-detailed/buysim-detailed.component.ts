import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyeSimsService } from 'src/providers/buy-esims.service';

@Component({
  selector: 'app-buysim-detailed',
  templateUrl: './buysim-detailed.component.html',
  styleUrls: ['./buysim-detailed.component.scss']
})
export class BuysimDetailedComponent implements OnInit {
  public tabVal:any = 'dataOnly';
  public dataPlans:any[] = []
  public countryOrRegion:any;
  public profileData:any;
  public areaType:any;
  public token:any;

  constructor(public router: Router, public dialog: MatDialog, public ac: ActivatedRoute,
    public buyesimService: BuyeSimsService
  ){}

  ngOnInit(): void {
    this.countryOrRegion = this.ac.snapshot.params['name'];
    this.areaType = this.ac.snapshot.params['type'];
    let data: any = localStorage.getItem('agent-data')
    if (data) {
      this.profileData = JSON.parse(data);
      this.token = localStorage.getItem('agent-token')
      this.getPlans()
    }
  }

  tabChange(val:any){
    this.tabVal = val;
    this.getPlans()
  }

  getPlans(){
    let reqObj = {
      region: this.ac.snapshot.params['name'],
      type: this.tabVal,
      page_marker: 0,
      agent: this.profileData.agent.agent_name
    }
    this.buyesimService.getPlansBasedOnRegionsOrCountries(reqObj).subscribe(res=>{
      if(res.plans){
        this.dataPlans = res.plans;
      }
    })
  }

  backToPage(){
    this.router.navigate(['/dashboard/buy-sims'])
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
  

}



@Component({
  selector: 'app-cartDialoge',
  templateUrl: './cartDialoge.component.html',
  styleUrls: ['./buysim-detailed.component.scss']
})
export class CartDialogeComponent {

  agree:boolean = false;
  errorFlag:boolean = false
  count:number = 1;
  constructor(public dialogRef: MatDialogRef<CartDialogeComponent>, public router: Router, public dialog: MatDialog) { }

  gotoCart() {
    this.router.navigate(['/dashboard/shiping-details'])
    this.dialogRef.close()
  }

  close() {
    // document.getElementsByClassName("animate__animated")[0].classList.remove("animate__slideInLeft")
    // document.getElementsByClassName("animate__animated")[0].classList.add("animate__slideOutRight");
    // setTimeout(() => { this.dialogRef.close(); }, 1000);
    // let val:any = this.count++

    this.dialogRef.close()
  }

  


}



