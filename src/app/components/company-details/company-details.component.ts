import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  loading: boolean = false;
  data: any;
  id: number = 0;
  company: any;

  constructor(private getData: GetDataService, private shareData: ShareDataService) { }

  ngOnInit(): void {
    this.loading = true;
    this.shareData.currentData.subscribe((e) => {this.data = e });
    this.id = this.data.company.id;
    this.getData.getCompanyInfo(this.id).subscribe((data) => {this.company = data; this.loading = false;})
  }

}
