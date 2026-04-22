import { LightningElement } from 'lwc';

export default class DemoConditional extends LightningElement {
    isVisible = false

    here(event){
        this.isVisible = !this.isVisible;
    }
}