import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  jobDetails: any;

  constructor(private shareData: ShareDataService) { }

  ngOnInit(): void {
    this.shareData.currentData.subscribe((e) => {this.jobDetails = e })
  }

}
