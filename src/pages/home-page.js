import { html, LitElement, css } from "lit-element";
import { unsafeCSS } from "lit-element";

/* --- STYLES --- */
import generalStyles from '../styles/general.css?inline';
/* --- STYLES --- */

/* --- VIEWS --- */
import '../views/nav-view/nav-view.js';
import '../views/title-view/title-view.js';
/* --- VIEWS --- */

/* --- COMPONENTS --- */
import '../components/date-picker-component/date-picker-component.js';
/* --- COMPONENTS --- */

export class HomePage extends LitElement{
    static properties = {
        nombre: { type: String },
    };

    constructor(){
        super();
        this.nombre = '';
    }

    static styles = [
        css`${unsafeCSS(generalStyles)}`,
    ]

    render(){
        return html`
            <main class="main-container d-flexx d-col">
                <section class="innerContainer">
                    <title-view></title-view>  
                    <nav-view></nav-view>
                    <date-picker-component></date-picker-component>
                </section>
            </main>
        `;
    }
}
customElements.define("home-page", HomePage);