import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { ApiResponseModel } from '../model/interface/role';
import { Project } from '../model/class/project';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.API_URL + Constant.API_URL.GET_ALL_CLIENT)
  }

  getAllEmployee(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.API_URL + Constant.API_URL.GET_ALL_EMP)
  }
  getAllClientProjects(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(environment.API_URL + Constant.API_URL.GET_ALL_PROJECT)
  }
  addUpdate(obj: Client): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.API_URL + "AddUpdateClient", obj)
  }

  deleteClientById(id: number): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId=" + id)
  }

  addClientProjectUpdate(obj: Project): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(environment.API_URL + "AddUpdateClientProject", obj)
  }
}


