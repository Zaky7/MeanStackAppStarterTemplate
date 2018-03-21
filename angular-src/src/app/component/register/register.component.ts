import { Component, OnInit }           from '@angular/core';
import { ValidateService}              from '../../services/validate.service';
import { FlashMessagesService }        from 'angular2-flash-messages/module';
import { AuthService }                 from '../../services/auth.service';
import { Router }                      from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  name: String;
  username: String;
  email: String;
  password: String;


  constructor(
    private validateService: ValidateService, 
    private flashmessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {

   	const newUser = {
   	 	name: this.name,
   	 	username:this.username,
   	 	email:this.email,
   	 	password:this.password
 	  }

    if(!this.validateService.validateRegister(newUser)){
         console.log('Fill complete Form');
         this.flashmessage.show ('Fill complete Form!', { cssClass:'alert-danger', timeout: 3000 });
         return false;
    }


    if(!this.validateService.validateEmail(newUser.email)){
         console.log('Not valid Email');
          this.flashmessage.show('Not valid Email!', { cssClass:'alert-danger', timeout: 3000 });
         return false;
    }

    this.authService.registerUser(newUser).subscribe( data => {
        if(data.success){
          this.flashmessage.show('You are registered now you can Login', { cssClass:'alert-success', timeout: 3000 });
          this.router.navigate(['/login']);
        }else{
          this.flashmessage.show('Not valid Email!', { cssClass:'alert-danger', timeout: 3000 });
          this.router.navigate(['/register']);
        }
    });

   	 
  }

}
