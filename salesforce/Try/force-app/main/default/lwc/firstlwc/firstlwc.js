import { LightningElement } from 'lwc';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export default class Firstlwc extends LightningElement {
    name="Roshan";
    count=0;
    count1=0;

    handleClick() {
        this.count++;
        if(this.count===30){
            alert("Stop clicking man !!");
        }
}
    handleClick1(){
        this.count1++;
        if(this.count1===10){
            alert("Stop the W you ");
        }
    }
}