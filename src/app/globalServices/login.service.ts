import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class LoginService{

  constructor(
    private http:Http
  ){}

  private headers = new Headers({'Content-Type':'application/json'});
  private loginUrl = '/';

  public logIn():Promise<any>{
    return this.http.get(this.loginUrl)
      .toPromise()
  }
}
