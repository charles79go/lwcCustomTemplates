
/**
 * Use as <c-input-with-icon 
 *          label="Username"
 *          type="text"
 *          value={userName} 
 *          onchange={handleUserNameChange}   
 *          utility-icon="user"
 *          ></c-input-with-icon>
 */

import { LightningElement, api} from 'lwc';

export default class InputWithIcon extends LightningElement {
    @api type = 'text'; // default type is text
    @api label = 'Enter Label';
    @api utilityIcon;
    inputValue = '';

    @api 
    get value() {
        return this.inputValue;
    }
    set value(val) {
        this.inputValue = val;
    }

    get icon() {
        return `utility:${this.utilityIcon}`;
    }

    handleInputChange(event) {
        this.inputValue = event.target.value;

        const changeEvent = new CustomEvent('change', {
            detail: { value: this.inputValue }
        });
        this.dispatchEvent(changeEvent);
    }
}


