import { LightningElement } from 'lwc';

import facebook from '@salesforce/resourceUrl/facebook';
import google from '@salesforce/resourceUrl/google';
import linkedin from '@salesforce/resourceUrl/linkedin';
import userIcon from '@salesforce/resourceUrl/userIcon';
import passwordIcon from '@salesforce/resourceUrl/passwordIcon';


export default class LoginFormTransparent extends LightningElement {
    facebook = facebook;
    google = google;
    linkedin = linkedin;
    userIcon = userIcon;
    passwordIcon = passwordIcon;
    userName = '';
    password = '';

    handleUserName(event) {
        this.userName = event.target.value;
        console.log('Username:', this.userName);
    }

    handlePassword(event) {
        this.password = event.target.value;
        console.log('Password:', this.password);
    }

    handleForgotPassword() {
        console.log('Forgot Password Clicked');
    }

    handleSignUp() {
        console.log('Sign Up Clicked');
    }

    handleFacebookLogin() {
        console.log('Facebook Login Clicked');
    }

    handleGoogleLogin() {
        console.log('Google Login Clicked');
    }

    handleLinkedInLogin() {
        console.log('LinkedIn Login Clicked');
    }
}