import { Component } from '@angular/core';

// Import the DataService
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  
  constructor(private dataService: DataService) {

  }

  getUsers(){
    this.dataService.getUsers();
  }
}
