import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/DecoratorsDemo.getAccount';

const columns = [
    { label: "ID", fieldName: "Id" },
    { label: "Name", fieldName: "Name" },
    { label: "Phone", fieldName: "Phone" },
    { label: "Rating", fieldName: "Rating" }
];

export default class WireDemo extends LightningElement {

    columns = columns;
    data = [];

    @wire(getAccount)
    wireAccount({ data, error }) {
        if (data) {
            this.data = data;
        } else if (error) {
            console.error("Error Occurred: ", error);
        }
    }
}