import { Component } from '@angular/core';
import { Client } from 'src/models/client';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
})

export class ClientsComponent {
  title = 'clients';

  constructor(service: HttpClient) {
    service.get<Client[]>("api/client/getall")
      .subscribe(x => this.clients = x);
  }

  //clients: Client[] = [{ name: "Alex", age: 42 }];
  clients: Client[] = [];
}
