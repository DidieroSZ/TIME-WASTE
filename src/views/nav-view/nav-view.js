import { html, LitElement, css } from "lit-element";
import { unsafeCSS } from "lit-element";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/general.css?inline';
import navViewStyles from './nav-view-styles.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
/* --- ICONS --- */

export class NavView extends LitElement{
    static properties = {
        nombre: { type: String },
    };
    
    constructor(){
        super();
        this.nombre = '';
    }
    
    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(navViewStyles)}`,
    ]

    render(){
        return html`
            <nav class="general-sections nav-container d-flexx d-row">
                <button class="btn-gen d-flexx d-row trans">${unsafeHTML(icons.time1)} Transcurrido</button>
                <button class="btn-gen d-flexx d-row trans">${unsafeHTML(icons.time2)} Gastado</button>
            </nav>
        `;
    }
}
customElements.define("nav-view", NavView);