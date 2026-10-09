/**
 * Web Components
 *
 * A suite of native browser technologies allowing the creation of reusable, encapsulated, custom
 * HTML tags with isolated styling and behavior using standard Web APIs.
 */

//==================================================================================================
// Custom Element Definition
//==================================================================================================

/**
 * Custom Component
 * - Encapsulates template rendering, Shadow DOM creation, and attribute observing.
 * - Lifecycle:
 *   - 'connectedCallback': Executes when the element is appended to the DOM.
 *   - 'disconnectedCallback': Executes when the element is removed from the DOM.
 *   - 'attributeChangedCallback': Executes when observed attributes are updated.
 */
class UserCard extends HTMLElement {
    static get observedAttributes() {
        return ['name', 'role']
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render()
        }
    }

    render() {
        const name = this.getAttribute('name') || 'Guest'
        const role = this.getAttribute('role') || 'User'

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: system-ui, sans-serif;
                }
                .card {
                    padding: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                h3 {
                    margin: 0 0 0.5rem 0;
                }
            </style>
            <div class="card">
                <h3>${name}</h3>
                <p>${role}</p>
            </div>
        `
    }
}

//==================================================================================================
// Registration & Usage
//==================================================================================================

/**
 * Register Custom Element
 * - Registers the custom HTML tag in the global 'customElements' registry.
 * - Requirement: Custom tag names MUST contain a hyphen (-) to prevent conflicts with standard
 *   tags.
 */
customElements.define('user-card', UserCard)

/**
 * Programmatic Instantiation
 * - Creates, configures, and appends the web component dynamically using standard DOM methods.
 */
const card = document.createElement('user-card')
card.setAttribute('name', 'John')
card.setAttribute('role', 'Developer')
document.body.appendChild(card)
