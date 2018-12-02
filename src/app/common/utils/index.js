import { HttpHeaders } from '@angular/common/http';

export const httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

export const getNestedObject =  (nestedObj, pathArr) =>  {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
};

