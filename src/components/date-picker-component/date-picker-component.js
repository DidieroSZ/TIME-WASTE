import { html, LitElement, css } from "lit-element";
import { unsafeCSS } from "lit-element";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/general.css?inline';
import innerStyles from './date-picker-component-styles.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
/* --- ICONS --- */

export class DatePickerComponent extends LitElement{
    static properties = {
        nombre: { type: String },
    };
    
    constructor(){
        super();
        this.nombre = '';
    }
    
    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(innerStyles)}`,
    ]

    render(){
        return html`
            <article class="general-sections picker-date d-flexx d-col">
                <input class="input-date btn-gen" type="date" value="" id="desde"> 
                <span class="arrow-date">${unsafeHTML(icons.arrow)}</span>
                <input class="input-date btn-gen" type="date" value="" id="hasta"> 
                <button class="btn-gen d-flexx d-row">${unsafeHTML(icons.calendar)} Calcular</button>
            </article>
        `;
    }
}
customElements.define("date-picker-component", DatePickerComponent);