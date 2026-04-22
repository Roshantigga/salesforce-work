import { LightningElement } from 'lwc';
import Acc from '@salesforce/apex/Ex.Acc';

const columns = [
    { label: "ID", fieldName: "Id" },
    { label: "Name", fieldName: "Name" },
    { label: "Phone", fieldName: "Phone" },
    { label: "Rating", fieldName: "Rating" }
];

export default class ImperativeDemoP extends LightningElement {
    columns = columns;
    data = [];
    handelclick() {
        Acc()
        .then(result=> {this.data = result;})
        .catch(error=> {console.error =error;});
    }

}