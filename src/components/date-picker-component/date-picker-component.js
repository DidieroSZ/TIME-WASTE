import { html, LitElement, css } from "lit";
import { unsafeCSS } from "lit";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import flatpickr from "flatpickr";

/* --- STYLES --- */
import generalStyles from '../../styles/general.css?inline';
import innerStyles from './date-picker-component-styles.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
/* --- ICONS --- */

import "flatpickr/dist/flatpickr.min.css";

export class DatePickerComponent extends LitElement{
    static properties = {
        selectedDateFrom: { type: String },
        selectedDateTo: { type: String },
    };
    
    constructor(){
        super();
        this.selectedDate = '';
    }
    
    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ]

    firstUpdated() {
        const input1 = this.renderRoot.querySelector('#date-input-from');
        this.fromCalendar = flatpickr(input1, {
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "d-m-Y",
            maxDate: "today",
            onChange: (_, dateStr) => {
                this.selectedDateFrom = dateStr;
            }
        });

        const input2 = this.renderRoot.querySelector('#date-input-to');
        this.toCalendar = flatpickr(input2, {
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "d-m-Y",
            maxDate: "today",
            onChange: (_, dateStr) => {
                this.selectedDateTo = dateStr;
            }
        });
    }

    render(){
        return html`
            <article class="general-sections picker-date-container d-flexx">
                <div class="inner-picker-date d-flexx d-row">
                    <label class="input-wrapper d-flexx">
                        <input class="text-date" alt="" id="date-input-from" type="text" readonly="readonly" placeholder="From Date...">
                        <button @click=${this._openCalendar} data-type="from" class="btn-gen btn-date d-flexx flatpickr">
                            ${unsafeHTML(icons.calendar)}
                        </button>
                    </label>
                    <div class="middle-arrow">${unsafeHTML(icons.moveRight)} </div>
                    <label class="input-wrapper d-flexx">
                        <input disable class="text-date" id="date-input-to" type="text" readonly="readonly" placeholder="To Date...">
                        <button @click=${this._openCalendar} data-type="to" class="btn-gen btn-date d-flexx flatpickr">
                            ${unsafeHTML(icons.calendar)}
                        </button>
                    </label>
                </div>
            </article>
        `;
    }

    _clickDatePicker(e){
        console.log('ddddd')
    }

    _openCalendar(e) {
        const btn = e.target.closest('button');
        const tipo = btn.getAttribute("data-type");
        if (tipo === 'from') {
            this.fromCalendar.open();
        }
        else{
            this.toCalendar.open();
        }
        
    }
}
customElements.define("date-picker-component", DatePickerComponent);