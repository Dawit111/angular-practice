import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel } from '../../model/interface/role';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";
import { MyButtonComponent } from "../../reusableComponent/my-button/my-button.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, AlertComponent, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  ngOnInit(): void {
    this.loadClient()
  }
  clientObj: Client = new Client()
  clientList: Client[] = [];
  clientService = inject(ClientService)

  loadClient() {
    this.clientService.getAllClients().subscribe((res: ApiResponseModel) => {
      this.clientList = res.data
    }, error => {
      alert("API error/Network error!")
    })
  }

  onSaveClient(text: string) {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res) => {
      if (res.result) {
        alert("Client created successfully!")
        this.loadClient()
        this.clientObj = new Client()
      } else {
        alert(res.message)
      }
    })
  }

  onEdit(data: Client) {
    this.clientObj = data
  }

  onDelete(id: number) {
    const isDelete = confirm("sure delete ?")
    if(isDelete) {
       this.clientService.deleteClientById(id).subscribe((res)=> {
      if(res.result) {
        alert("Client deleted");
        this.loadClient()
      } else {
        alert(res.message)
      }
    })
    }
   
  }

}
