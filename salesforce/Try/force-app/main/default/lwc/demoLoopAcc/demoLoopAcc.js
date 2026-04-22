import { LightningElement,wire } from 'lwc';
import getData from '@salesforce/apex/AccountController.getData';

export default class DemoLoopAcc extends LightningElement {
    accounts =[];

    @wire(getData)
    wiredAccounts({data,error}){
        if(data){
            this.accounts = data;
        } else if(error) {
            console.error(error);
        }
    }
}