import { Injectable } from '@angular/core';
import { Cookies } from '../../models/Cookies/Cookies';

@Injectable()
export class CookiesProvider {

    cookies: Cookies;

    constructor() {
        this.cookies = new Cookies();
    }

    getBaseUrl() {
        return Cookies.baseUrl;
    }

    getEmail() {
        return this.cookies.email;
    }
    getRole() {
        return this.cookies.role;
    }
    getAccessToken() {
        return this.cookies.accessToken;
    }

    setEmail(email: string) {
        this.cookies.email = email;
    }
    setRole(role: string) {
        this.cookies.role = role;
    }
    setAccessToken(accessToken: string) {
        this.cookies.accessToken = accessToken;
    }

    isManager() {
        if (this.cookies.email == Cookies.manager) {
            return true;
        }
        return false;
    }
}