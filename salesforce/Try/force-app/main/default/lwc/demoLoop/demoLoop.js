import { LightningElement ,wire} from 'lwc';
import main from '@salesforce/apex/ContactController.main';

export default class DemoLoop extends LightningElement {
    contacts =[];
    @wire(main)
    wireContact({error,data}) {
        if(data) {
            this.contacts = data;
        } else if(error) {
            console.error(error);
        }
    }
}