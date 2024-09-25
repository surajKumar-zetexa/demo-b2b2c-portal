import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';




export interface PeriodicElement {
  id:string;
  name: string;
  Destination:string;
  Price:string;
  AssignedDate:string;
  img: string;
  DueDate: string;
  SimType:string;
  CurrentStatus:string
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: "#876364", name: 'Rajesh', Destination: "Europe",  img: "assets/img/user1.jpg", Price: "$2 USD",  AssignedDate: '02/01/2024', DueDate: "03/01/2024", SimType:'eSIM', CurrentStatus:'Disable'},
  {id: "#876368", name: 'Zacky', Destination: "Africa",  img: "assets/img/user2.jpg", Price: "$5 USD",  AssignedDate: '03/01/2024', DueDate: "04/01/2024", SimType:'Physical', CurrentStatus:'Enable'},
  {id: "#876412", name: 'Emily ', Destination: "Africa",  img: "assets/img/user3.jpg", Price: "$7 USD",  AssignedDate: '04/01/2024', DueDate: "05/01/2024", SimType:'eSIM', CurrentStatus:'Enable'},
  {id: "#876364", name: 'Mark', Destination: "North America",  img: "", Price: "$9 USD",  AssignedDate: '05/01/2024', DueDate: "06/01/2024", SimType:'eSIM', CurrentStatus:'Enable'},
  {id: "#876621", name: 'Rajesh', Destination: "Latin America",  img: "assets/img/user1.jpg", Price: "$10 USD",  AssignedDate: '06/01/2024', DueDate: "07/01/2024", SimType:'eSIM', CurrentStatus:'Disable'},
  {id: "#876364", name: 'Rajesh', Destination: "Europe",  img: "", Price: "$12 USD",  AssignedDate: '07/01/2024', DueDate: "08/01/2024", SimType:'Physical', CurrentStatus:'Disable'},
  {id: "#876364", name: 'Rajesh', Destination: "Europe",  img: "", Price: "$16 USD",  AssignedDate: '08/01/2024', DueDate: "09/01/2024", SimType:'eSIM', CurrentStatus:'Enable'},
  {id: "#876364", name: 'Rajesh', Destination: "Europe",  img: "assets/img/user3.jpg", Price: "$12 USD",  AssignedDate: '09/01/2024', DueDate: "10/01/2024", SimType:'eSIM', CurrentStatus:'Disable'},
  {id: "#876364", name: 'Rajesh', Destination: "Europe",  img: "assets/img/user1.jpg", Price: "$18 USD",  AssignedDate: '10/01/2024', DueDate: "11/01/2024", SimType:'Physical', CurrentStatus:'Enable'},
  {id: "#876368", name: 'Zacky', Destination: "Africa",  img: "assets/img/user2.jpg", Price: "$16 USD",  AssignedDate: '11/01/2024', DueDate: "13/01/2024", SimType:'eSIM', CurrentStatus:'Enable'},
  {id: "#876412", name: 'Emily ', Destination: "Latin America",  img: "assets/img/user3.jpg", Price: "$17 USD",  AssignedDate: '03/01/2024', DueDate: "04/01/2024", SimType:'eSIM', CurrentStatus:'Disable'},
  {id: "#876364", name: 'Mark', Destination: "North America",  img: "", Price: "$19 USD",  AssignedDate: '02/01/2024', DueDate: "03/01/2024", SimType:'Physical', CurrentStatus:'Enable'},
  {id: "#876621", name: 'Rajesh', Destination: "Latin America",  img: "assets/img/user1.jpg", Price: "$20 USD",  AssignedDate: '03/01/2024', DueDate: "04/01/2024", SimType:'eSIM', CurrentStatus:'Disable'},
];

const ELEMENT_DATA1: PeriodicElement[] = [
  {id: "#876364", name: 'Rajesh', Destination: "Europe",  img: "assets/img/user1.jpg", Price: "$2 USD",  AssignedDate: '02/01/2024', DueDate: "03/01/2024", SimType:'eSIM', CurrentStatus:'Delete'},
  {id: "#876368", name: 'Zacky', Destination: "Africa",  img: "assets/img/user2.jpg", Price: "$5 USD",  AssignedDate: '03/01/2024', DueDate: "04/01/2024", SimType:'Physical', CurrentStatus:'Delete'},
  {id: "#876412", name: 'Emily ', Destination: "Africa",  img: "assets/img/user3.jpg", Price: "$7 USD",  AssignedDate: '04/01/2024', DueDate: "05/01/2024", SimType:'eSIM', CurrentStatus:'Delete'},
  {id: "#876364", name: 'Mark', Destination: "North America",  img: "", Price: "$9 USD",  AssignedDate: '05/01/2024', DueDate: "06/01/2024", SimType:'eSIM', CurrentStatus:'Delete'},
  {id: "#876621", name: 'Rajesh', Destination: "Latin America",  img: "assets/img/user1.jpg", Price: "$10 USD",  AssignedDate: '06/01/2024', DueDate: "07/01/2024", SimType:'eSIM', CurrentStatus:'Delete'},
  {id: "#876364", name: 'Rajesh', Destination: "Europe",  img: "", Price: "$12 USD",  AssignedDate: '07/01/2024', DueDate: "08/01/2024", SimType:'Physical', CurrentStatus:'Delete'},
  {id: "#876364", name: 'Rajesh', Destination: "Europe",  img: "", Price: "$16 USD",  AssignedDate: '08/01/2024', DueDate: "09/01/2024", SimType:'eSIM', CurrentStatus:'Delete'},
  {id: "#876364", name: 'Rajesh', Destination: "Europe",  img: "assets/img/user3.jpg", Price: "$12 USD",  AssignedDate: '09/01/2024', DueDate: "10/01/2024", SimType:'eSIM', CurrentStatus:'Delete'},
  {id: "#876364", name: 'Rajesh', Destination: "Europe",  img: "assets/img/user1.jpg", Price: "$18 USD",  AssignedDate: '10/01/2024', DueDate: "11/01/2024", SimType:'Physical', CurrentStatus:'Delete'},
  {id: "#876368", name: 'Zacky', Destination: "Africa",  img: "assets/img/user2.jpg", Price: "$16 USD",  AssignedDate: '11/01/2024', DueDate: "13/01/2024", SimType:'eSIM', CurrentStatus:'Delete'},
  {id: "#876412", name: 'Emily ', Destination: "Latin America",  img: "assets/img/user3.jpg", Price: "$17 USD",  AssignedDate: '03/01/2024', DueDate: "04/01/2024", SimType:'eSIM', CurrentStatus:'Delete'},
  {id: "#876364", name: 'Mark', Destination: "North America",  img: "", Price: "$19 USD",  AssignedDate: '02/01/2024', DueDate: "03/01/2024", SimType:'Physical', CurrentStatus:'Delete'},
  {id: "#876621", name: 'Rajesh', Destination: "Latin America",  img: "assets/img/user1.jpg", Price: "$20 USD",  AssignedDate: '03/01/2024', DueDate: "04/01/2024", SimType:'eSIM', CurrentStatus:'Delete'},
];

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  showActive: boolean = true;
  showExpired: boolean = false;
  
  displayedColumns: string[] = ['id', 'name', 'Destination', 'Price', 'AssignedDate', 'DueDate','SimType', 'CurrentStatus'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA1);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  

  constructor(){

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
