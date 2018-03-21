import { Injectable }   from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  
  authToken:any;
  user:any;

  constructor(private http: Http) { }


  registerUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type','application/json');

     //usign observable for mapping data to json 
    return this.http.post('http://localhost:8080/users/register',user,{ headers:headers})
  	//return this.http.post('/users/register',user,{ headers:headers})
  	.map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:8080/users/authenticate',user,{ headers:headers})
    //return this.http.post('/users/authenticate',user,{ headers:headers})
    .map(res => res.json());
  }
  

  getProfile(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.getAuthToken();
    headers.append('Authorization',this.authToken);
    return this.http.get('http://localhost:8080/users/profile',{ headers:headers})
    //return this.http.get('http://localhost:8080/users/profile',{ headers:headers})
    .map(res => res.json());
  }

  getAuthToken(){
    const authToken = localStorage.getItem('token');
    this.authToken  = authToken; 
  }

  storeUserData(token,user){
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn(){
    /*
    here use token as name in localStorage setting the token
    tokenNotExpired will by default assume the token name is token unless a token name is passed to it, 
    ex: tokenNotExpired('token_name'). 
    This will be changed in a future release to automatically use the token name that is set in AuthConfig.
    */
    return tokenNotExpired();
  }

}
