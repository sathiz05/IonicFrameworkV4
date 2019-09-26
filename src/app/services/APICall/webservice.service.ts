import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../GlobalService/global.service';


@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(
    public http: HttpClient,
    public globalService: GlobalService
  ) { }

  apiCall(apiMethod, methodType, reqData, token) {
    //loading present
    this.globalService.presentLoading();

    return new Promise((resolve, reject) => {

      //for request paremetes
      let apiURL = `http://localhost:3000${apiMethod}`;
      /*  let header = new HttpHeaders();
       header.append("Authorization", "testin");
       header.append("Content-Type", "application/json"); */
      let httpOptions;
      if (token) {
        httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': token ? this.globalService.getToken() : ""
          })
        };
      } else {
        httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
      }

      if (methodType === "get") {
        this.http.get(apiURL, httpOptions).subscribe((res) => {
          console.log(`Success =>${JSON.stringify(res)}`);

          this.globalService.dismissLoading().then(() => {
            resolve(res);
          });
        }, (err) => {
          console.log(`Error =>${JSON.stringify(err)}`);
          this.globalService.dismissLoading();
          reject(err);
        })
      } else {

        this.http.post(apiURL, reqData, httpOptions).subscribe((res) => {
          console.log(`Success =>${JSON.stringify(res)}`);

          this.globalService.dismissLoading().then(() => {
            resolve(res);
          });
        }, (err) => {
          console.log(`Error =>${JSON.stringify(err)}`);
          this.globalService.dismissLoading().then(() => {
            reject(err);
          });
        })
      }
    })
  };
}
