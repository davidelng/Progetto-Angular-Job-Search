import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  readonly ROOT_URL = 'https://www.themuse.com/api/public';

  constructor(private http: HttpClient) { }

  getJobs(level: any, page: number) {
    return this.http.get(`${this.ROOT_URL}/jobs?category=Software%20Engineering&page=${page}&location=Italy&level=${level}`)
  }

  getCompanyInfo(id: any) {
    return this.http.get(`${this.ROOT_URL}/companies/${id}`);
  }
}
