import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    handleClick(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log('I was clicked!');
    }
}
