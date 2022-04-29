import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  @Input() jobOffer: any;

  constructor(private shareData: ShareDataService) { }

  ngOnInit(): void {
  }

  showDetails() {
    this.shareData.shareData(this.jobOffer);
  }

}
