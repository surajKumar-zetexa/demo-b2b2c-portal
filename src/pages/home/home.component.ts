import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



declare var require: any;
if(typeof document === 'object' && !!document) {
  var CanvasJS = require('../../../node_modules/@canvasjs/charts');
  CanvasJS.addColorSet("customColorSet",["#AC42FF", "#FFB419", "#009B82",  ]);
}




export interface PeriodicElement {
  id:string;
  name: string;
  price:string;
  bundlename:string;
  bundleStatus:string;
  img: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: "#876364", name: 'Rajesh', price: "$35",  img: "assets/img/user1.jpg", bundlename: "Europe",  bundleStatus: 'Pending',},
  {id: "#876368", name: 'Zacky', price: "$4",  img: "assets/img/user2.jpg", bundlename: "Spain",  bundleStatus: 'Success',},
  {id: "#876412", name: 'Emily ', price: "$10",  img: "assets/img/user3.jpg", bundlename: "Asia",  bundleStatus: 'Success', },
  {id: "#876364", name: 'Mark', price: "$15",  img: "", bundlename: "Saudi Arabia",  bundleStatus: 'Pending', },
  
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {



  displayedColumns: string[] = ['id', 'name', 'price', 'bundlename', 'bundleStatus', ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  chartOptions = {
	  animationEnabled: true,
    theme: "dark2",
	backgroundColor: "#0f1014",
	  title: {
		// text: "Crude Oil Reserves Vs Production"
	  },
	  axisX: {
		labelAngle: -90
	  },
	  axisY: {
		// title: "billion of barrels"
	  },
	  axisY2: {
		// title: "million barrels/day"
	  },
	  toolTip: {
		shared: true
	  },
	  legend:{
		cursor:"pointer",
		itemclick: function(e: any){
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  }
		  else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
	  data: [{
	    type: "column",	
	    name: "Financial performance",
	    legendText: "Cost",
	    showInLegend: true, 
      color: '#9564F8',
	    dataPoints:[
	  	  {label: "JAN ", y: 262},
	  	  {label: "FEB", y: 211},
	  	  {label: "MAR", y: 175},
	  	  {label: "APR", y: 137},
	  	  {label: "MAY", y: 115},
	  	  {label: "JUN", y: 104},
	  	  {label: "JUL", y: 97.8},
	  	  {label: "AUG", y: 60},
	  	  {label: "SEP", y: 23.3},
	  	  {label: "OCT", y: 20.4},
        {label: "NOV", y: 20.4},
        {label: "DEC", y: 20.4}
	  ]
	  }, {
	    type: "column",	
	    name: "Financial performance",
	    legendText: "Profit",
	    axisYType: "secondary",
	    showInLegend: true,
      color: '#4E4166',
	    dataPoints:[
	  	  {label: "JAN", y: 11.15},
	  	  {label: "FEB", y: 8.5},
	  	  {label: "MAR", y: 4.6},
	  	  {label: "APR", y: 3.2},
	  	  {label: "MAY", y: 2.6},
	  	  {label: "JUN", y: 10.7},
	  	  {label: "JUL", y: 5.1},
	  	  {label: "AUG", y: 10.23},
	  	  {label: "SEP", y: 10.3},
	  	  {label: "OCT", y: 4.3},
        {label: "NOV", y: 4.3},
        {label: "DEC", y: 4.3}
	  ]
    }]
  }	




  chartOptions1 = {
	  animationEnabled: true,
    theme: "dark2",
	backgroundColor: "#0f1014",
    colorSet: "customColorSet",
	  title:{
		// text: "Popular countries"
	  },
	  data: [{
		type: "doughnut",    
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{name}",
		dataPoints: [
		  { y: 28, name: "Magic number" },
		  { y: 10, name: "Regional" },
		  { y: 20, name: "Local" },
		 
		  
		]
	  }]
	}	
}
