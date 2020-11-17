import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  getLaunchList(filterObject:object){
    console.log(`SHIVA: DashboardService -> getLaunchList -> filterObject`, filterObject);
    // format from object to query string
    let queryString = Object.keys(filterObject).map(key => filterObject[key]!==null?key + '=' + filterObject[key]:null).filter(data=>data).join('&');
    return this.http.get<any>(`${environment.baseUrl}launches?${queryString}`).pipe(map((data)=>{
      // data['land_success'] = data?.rocket?.first_stage?.cores[0];
      return data;
    }));
  }
}
