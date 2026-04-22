import { LightningElement, wire } from 'lwc';
import cc from '@salesforce/apex/Decoratorcontact.cc';

const COLS = [
    { label: "Last Name", fieldName: "LastName" },
    { label: "Account Id", fieldName: "AccountId" }
];

export default class ContacDeco extends LightningElement {
    columns = COLS;
    data = [];

    @wire(cc)
    wireAccount({ data, error }) {
        if (data) {
            this.data = data;
        } else if (error) {
            console.error(error);
        }
    }
}