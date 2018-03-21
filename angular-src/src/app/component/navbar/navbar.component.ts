import { Component, OnInit } 		       from '@angular/core';
import { AuthService }                 from '../../services/auth.service';
import { FlashMessagesService }        from 'angular2-flash-messages/module';
import { Router }                      from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  	private authService: AuthService,
  	private flashmessage: FlashMessagesService,
    private router: Router
    ) { }

  ngOnInit() {
  }
  
  onLogOutClick(){
  	   console.log('Logged Out');
       this.authService.logOut();
       this.flashmessage.show ('You are successfull Logged Out!', { cssClass:'alert-success', timeout: 3000 });
       this.router.navigate(['/login']);
       return false;
  }

}
