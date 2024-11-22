import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel, IEmployee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
  employeeList : IEmployee[] = []
  clientList : Client[] =[]
  clientService = inject(ClientService)
 
projectForm : FormGroup = new FormGroup({
  clientProjectId : new FormControl(0),
  projectName : new FormControl("",[Validators.required, Validators.minLength(4)]),
  startDate : new FormControl(""),
  expectedEndDate : new FormControl(""),
  loadByEmpId : new FormControl(""),
  completedDate : new FormControl(""),
  contactPerson : new FormControl(""),
  contactPersonContactNo : new FormControl(""),
  totalEmpWorking : new FormControl(""),
  projectCosts : new FormControl(""),
  projectDetails : new FormControl(""),
  contactPersonEmailId : new FormControl(""),
  clientId : new FormControl(""),
}) 

ngOnInit(): void {
      this.getALLEmployee()
      this.getALLClients()
  }

  getALLEmployee () {
    this.clientService.getAllEmployee().subscribe((res: ApiResponseModel) => {
    this.employeeList = res.data
    })
  }
  getALLClients () {
    this.clientService.getAllClients().subscribe((res: ApiResponseModel) => {
    this.clientList = res.data
    })
  }

  onSaveProject () {
    const formValue = this.projectForm.value

    this.clientService.addClientProjectUpdate(formValue).subscribe((res: ApiResponseModel) => {
      if(res.result) {
        alert("project created success!")
      } else {
        alert(res.message)
      }
    })
  }
}
