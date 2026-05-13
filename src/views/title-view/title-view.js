import { html, LitElement, css } from "lit-element";
import { unsafeCSS } from "lit-element";

/* --- STYLES --- */
import generalStyles from '../../styles/general.css?inline';
import navViewStyles from './title-view-styles.css?inline';
/* --- STYLES --- */

export class TitleView extends LitElement{
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
            <div class="general-sections title-container d-flexx d-col">
                <h1>Calculador de tiempo</h1>
                <p>Mostrar el tiempo de manera visual e intuitiva.</p>
            </div>
        `;
    }
}
customElements.define("title-view", TitleView);