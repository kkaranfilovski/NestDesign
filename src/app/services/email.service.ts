import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EmailService{
    endpoint: string = '';
    controller: string = "email";
    constructor(private http: HttpClient) {
      this.endpoint = `https://formspree.io/f/xleykzld`;
    }

    sendEmail(formData: UntypedFormGroup): Observable<any>{
        return this.http.post<UntypedFormGroup>(this.endpoint, formData)
    }
}
