import { customElement, LitElement, property, html } from 'lit-element'

@customElement('yo-button')
export class YoButton extends LitElement {

  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  foo = 'Yo'

  on_click() {
    alert('Yo~')
  }

  /**
   * Implement `render` to define a template for your element.
   */
  render() {
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`<button @click="${this.on_click}">${this.foo}</button>`
  }
}
