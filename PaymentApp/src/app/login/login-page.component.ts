import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; // Import the AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: []
})
export class LoginComponent {
  constructor(private authService: AuthService) {} // Inject the AuthService

  MsLogin() {
    this.authService.microsoftLogin(); // Call the microsoftLogin() method from the AuthService
  }
}
