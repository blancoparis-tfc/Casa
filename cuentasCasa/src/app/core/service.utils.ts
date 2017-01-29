import { Response } from '@angular/http'
import { Observable } from 'rxjs'


export function extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
}

export function handleError(error: Response) {
    console.info('Error', error);
    let errMsg = error.text() || 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
}