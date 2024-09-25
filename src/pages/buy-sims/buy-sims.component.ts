import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ParamMap, Route, Router } from '@angular/router';
import { RegionLcmService } from 'src/app/api/services';
import { BuyeSimsService } from 'src/providers/buy-esims.service';
import {  ActivatedRoute,  } from '@angular/router';

@Component({
  selector: 'app-buy-sims',
  templateUrl: './buy-sims.component.html',
  styleUrls: ['./buy-sims.component.scss']
})
export class BuySimsComponent {

  // tabVal:any = 'Country'

  // public allCountries: any[] = [
  //   // {countryflag:"assets/img/usa.png", countryName:'United States'},
  //   // {countryflag:"assets/img/india.png", countryName:'India'},
  //   // {countryflag:"assets/img/china.png", countryName:'China'},
  //   // {countryflag:"assets/img/japan.png", countryName:'Japan'},
  //   // {countryflag:"assets/img/turkey.png", countryName:'Turkey'},
  //   // {countryflag:"assets/img/egypt.png", countryName:'Egypt'},
  //   // {countryflag:"assets/img/thailand.png", countryName:'Thailand'},
  //   // {countryflag:"assets/img/united-kingdom.png", countryName:'United Kingdom'},
  //   // {countryflag:"assets/img/switzerland.png", countryName:'Switzerland'},
  //   // {countryflag:"assets/img/malaysia.png", countryName:'Malaysia'},
  //   // {countryflag:"assets/img/vietnam.png", countryName:'Vietnam'},
  //   // {countryflag:"assets/img/usa.png", countryName:'United States'},
  //   // {countryflag:"assets/img/italy.png", countryName:'Italy'},
  //   // {countryflag:"assets/img/kenya.png", countryName:'Kenya'},
  // ]


  public regionalCountries: any[] = [
    { countryflag: "assets/img/Africa.png", countryName: 'Africa', data: '$19/GB' },
    { countryflag: "assets/img/Asia.png", countryName: 'Asia', data: '$6/GB' },
    { countryflag: "assets/img/Caribbean-Islands.png", countryName: 'Caribbean Islands', data: '$9/GB' },
    { countryflag: "assets/img/Europe.png", countryName: 'Europe', data: '$24/GB' },
    { countryflag: "assets/img/latin.png", countryName: 'Latin America', data: '$3/GB' },
    { countryflag: "assets/img/Middle-east.png", countryName: 'Middle East & North Africa', data: '$17/GB' },
    { countryflag: "assets/img/North-America.png", countryName: 'North America', data: '$8/GB' },
  ]

  filteredCountries: any = [];
  searchTerm: string = '';
  displayedCountries: any[] = [];
  allCountries: any[] = [];
  tabVal: any = 'Country' 
  pageIndex: number = 0;
  pageSize: number = 10;
  pageLength: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100]; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public router: Router, public regionService: BuyeSimsService,private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getRegions()
    this.pageIndex = 0;
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.pageIndex = parseInt(params.get('pageIndex')!) || 0;
      this.pageSize = parseInt(params.get('pageSize')!) || 10;
      
    });
    this.getRegions();


  }
  public tabChange(val: any) {
    this.tabVal = val;
    this.getRegions()
  }

  totalItems: any;
  totalPages: number = 0;
  pageNumbers: number[] = [];

  getRegions() {
    const reqObj = {
      regionType: this.tabVal,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    };
    console.log(this.pageIndex)
    console.log(this.pageSize)

    this.regionService.getRegionsorCountries(reqObj).subscribe(res => {
      if (res && res.regions) {
        this.allCountries = res.regions; 
        this.filteredCountries = res.regions;
        this.pageLength = res.TotalRecords;
      }
    });
  }
  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getRegions();
    this.router.navigate([], { relativeTo: this.route, queryParams: { Page: this.pageIndex, PageLimit: this.pageSize } });
  }

  filterItems() {
    this.filteredCountries = this.allCountries.filter(country => {
      return country.region_name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  buySimDetailed(obj: any) {
    this.router.navigate(['/dashboard/buysim-details/' + '/' + this.tabVal.toLowerCase() + '/' + obj.region_name]);
  }

}
