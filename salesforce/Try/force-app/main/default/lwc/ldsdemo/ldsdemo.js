import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class RecordViewForm extends LightningElement {

    recordId = '001gL00000soWGzQAM';  
    objectApiName = ACCOUNT_OBJECT;

    nameField = NAME_FIELD;
    phoneField = PHONE_FIELD;
    websiteField = WEBSITE_FIELD;
}