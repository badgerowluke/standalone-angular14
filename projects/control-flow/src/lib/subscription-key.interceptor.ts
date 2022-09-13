import { HttpHandler,
    HttpInterceptor,
    HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';  
// import { EnvironmentService } from '../environments/environment.service';

@Injectable()
export class SubscriptionHeaderInterceptor implements HttpInterceptor {

    constructor(/*private env: EnvironmentService*/ ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        // if(this.isReqWhiteListed(req.url)) {
        //     const key = this.env.environment.backend != null ? this.env.environment.backend.subscriptionKey : null;
        //     if(key != null) {

        //         const newReq = req.clone({
        //             headers: req.headers
        //             .set('content-type', 'application/json')
        //             .set('Ocp-Apim-Subscription-Key', this.env.environment.backend.subscriptionKey)
        //         });
        //         return next.handle(newReq);
        //     }
        // }
        return next.handle(req);
    }
    private isReqWhiteListed(requestUrl: string): boolean {
        let positionIndicator: string = 'coaches/';
        let position = requestUrl.indexOf(positionIndicator);
        if (position > 0) {

            return true;
        //   let destination: string = requestUrl.substr(position + positionIndicator.length);
        //   for (let address of this.apiWhiteList) {
        //     if (new RegExp(address).test(destination)) {
        //       return true;
        //     }
        //   }
        }
        return false;
      }
}