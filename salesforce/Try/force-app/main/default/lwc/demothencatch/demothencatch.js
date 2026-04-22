import { LightningElement } from 'lwc';
import getAccount from '@salesforce/apex/ImperativeDemo.getAccountRecord';
 
const columns = [
    {label:"ID", fieldName:"Id"},
    {label:"Name", fieldName:"Name"},
    {label:"Phone", fieldName:"Phone"},
    {label:"Rating", fieldName:"Rating"}
]
 
export default class ImperativeDemo extends LightningElement {
 
    columns = columns;
    data = [];
 
    handleClick()
    {
        getAccount()
        .then(result => {
            this.data = result;
        })
        .catch(error =>{
            console.log(error);
        })
    }
 
}
 
 