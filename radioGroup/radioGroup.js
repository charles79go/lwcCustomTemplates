/**
 * use as
 *
 *          <c-radio-group
 *              label="Debit/Credit Card"
 *              name={paymentCardName}
 *              options={cardOptions}
 *              value={paymentCardValue}
 *              onchange={paymentCardChange}>
 *          </c-radio-group>
 * 
 *         cardOptions = [
 *             { label: '**** **** **** 1234', value: 'mastercard', image: masterCard },
 *             { label: '**** **** **** 5678', value: 'visa', image: visa },
 *             { label: '**** ****** 21001', value: 'amex', image: amex }
 *         ];
 */


import { LightningElement, api } from 'lwc';

export default class RadioGroup extends LightningElement {
    radioValue = '';
    @api name = '';
    @api label = '';
    @api options = [];


    // ==============================
    // run this once to get default check 
    rendered = false;
    renderedCallback() {
        if (this.rendered) return;
        this.rendered = true;

        this.template.querySelectorAll('input[type="radio"]').forEach((radio) => {
            if (radio.value === this.radioValue) radio.checked = true;
        });
    }
    // ==============================

    @api 
    get value() {
        return this.radioValue;
    }
    set value(val) {
        this.radioValue = val;
    }

    handleInputChange(event) {
        this.radioValue = event.target.value;

        const changeEvent = new CustomEvent('change', {
            detail: { value: this.radioValue }
        });
        this.dispatchEvent(changeEvent);
    }
}