import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/acount.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, BsDropdownModule, NgIf], //took out NgIf to match courses code
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private accountService = inject(AccountService);
  public loggedIn = false;
  model: any = {};
  

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.loggedIn = true;

      },
      error: error => console.log(error)
    })
  }

  logout(){
    this.loggedIn = false;
  }

}
