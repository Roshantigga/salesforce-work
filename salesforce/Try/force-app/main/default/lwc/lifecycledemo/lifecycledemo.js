import { LightningElement } from 'lwc';

export default class DemoLifecycle extends LightningElement {

    constructor() {
        super();
        console.log('1. Constructor');
    }

    connectedCallback() {
        console.log('2. Connected Callback');
    }

    renderedCallback() {
        console.log('3. Rendered Callback');
    }

    disconnectedCallback() {
        console.log('4. Disconnected Callback');
    }
}