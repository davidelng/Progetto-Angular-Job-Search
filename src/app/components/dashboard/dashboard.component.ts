import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  page: number = 1;
  
  jobs: any;

  filters: string = '';

  loading: boolean = false;

  constructor(private getData: GetDataService) { }

  ngOnInit(): void {
    this.fetchJobs()
  }

  fetchJobs() {
    this.loading = true;
    this.getData.getJobs(this.filters, this.page).subscribe((data) => {
      this.jobs = data;
      this.loading = false;
    })
  }

  filterSearch(value: any) {
    this.page = 1;
    this.filters = value;
    this.fetchJobs();
  }

  nextPage() {
    this.page = this.page + 1;
    this.fetchJobs();;
  }

  previousPage() {
    if (this.page === 1) return
    this.page = this.page - 1;
    this.fetchJobs();
  }
}
