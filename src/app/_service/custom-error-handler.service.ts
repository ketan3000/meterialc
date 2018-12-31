import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ObjectUnsubscribedError } from 'rxjs';
@Injectable()
export class CustomErrorHandlerService implements ErrorHandler {

  constructor(private toastrService: ToastrService, private injector: Injector) { }
  handleError(error) {
    this.toastrService.error(error.message);
    //var router = this.injector.get(Router);    
    //router.navigate(['/']);   
  };



}
