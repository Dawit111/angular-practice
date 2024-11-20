import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponseModel } from '../model/interface/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient)


  getDesignations(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>("http://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  }
}
