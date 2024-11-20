import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ApiResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
   roleList : IRole[] = [] 
  http = inject(HttpClient)

  ngOnInit(): void {
    this.getAllRoles()
  }

  getAllRoles () {
     this.http.get<ApiResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/getAllRoles").subscribe((res:ApiResponseModel)=>{
     this.roleList = res.data
     })
  }

}
