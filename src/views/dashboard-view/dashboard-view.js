import { html, LitElement, css } from "lit";
import { unsafeCSS } from "lit";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

/* --- STYLES --- */
import generalStyles from '../../styles/general.css?inline';
import viewStyles from './dashboard-view-styles.css?inline';
/* --- STYLES --- */

/* --- ICONS --- */
import { icons } from '../../utils/icons.js'
/* --- ICONS --- */

export class DashboardView extends LitElement{
    static properties = {
    };
    
    constructor(){
        super();
    }
    
    static styles = [
        css`${unsafeCSS(generalStyles)}`,
        css`${unsafeCSS(viewStyles)}`,
    ]

    render(){
        return html`
            <section class="general-sections dash-container">
                <div class="inner-item large-item full-counter">
                    <span class="full-counter-item d-flexx d-col">
                        <p>681</p>
                        <small class="mono-font">days</small>
                    </span>
                    <span class="full-counter-item d-flexx d-col">
                        <p>11</p>
                        <small class="mono-font">hours</small>
                    </span>
                    <span class="full-counter-item d-flexx d-col">
                        <p>19</p>
                        <small class="mono-font">minutes</small>
                    </span>
                    <span class="full-counter-item d-flexx d-col">
                        <p>15</p>
                        <small class="mono-font">seconds</small>
                    </span>
                </div>
                <div class="inner-item d-flexx d-col">d</div>
                <div class="inner-item">d</div>
                <div class="inner-item">d</div>
                <div class="inner-item large-item">d</div>
            </section>
        `;
    }
}
customElements.define("dashboard-view", DashboardView);