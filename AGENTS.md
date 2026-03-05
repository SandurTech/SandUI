# SandUI Agent Instructions (v1.0 - JS/ESM)

## Project Context
SandUI is a custom UI library built with Vite, React (JS), SCSS, and Storybook for the SandurTech microservices/Micro-SaaS ecosystem.
- **Strict Rule:** This is a JavaScript project. Do NOT create .ts or .tsx files. Use .js and .jsx.

## Tech Stack Rules
1. **React:** Use Functional Components. 
2. **Type Checking:** Use `prop-types` library for all component props. 
   - Every component must have a `[ComponentName].propTypes` block at the bottom of the file.
3. **Styling:** SCSS Modules. Source variables from `@/styles/_tokens.scss`.
   - Never hardcode HEX values; use `var(--sand-*)` or SCSS variables.
4. **Storybook:** Use `.stories.jsx`. Use 'Autodocs' to generate documentation from JSDoc.
   - Use 'Autodocs' and define 'Default', 'Hover', and 'Disabled' states.
5. **Icons:** Use `google-material-ui-icons` for all iconography.

## Documentation Standards (The JS "Type" System)
- Use **JSDoc** meticulously. Since we lack TS, the JSDoc `@param` tags are the only way IDEs will show autocomplete for SandUI.
- Format:
  /**
   * @component
   * @param {Object} props
   * @param {string} props.variant - The visual style (primary, secondary)
   * @param {boolean} [props.disabled=false] - Optional disabled state
   */

## Implementation Guardrails
- **Exports:** Use Named Exports for better tree-shaking (e.g., `export { Button }`).
- **Accessibility:** Use semantic HTML tags (`<button>`, `<nav>`, `<aside>`). Ensure `aria-labels` are present for interactive elements.
- **Performance:** Components should be exported using ES Modules for tree-shaking support.
- **Testing:** If adding logic, add a Vitest `.test.jsx` file.

## Pro Plan Protocol
- Jules: You are authorized to create new branches and submit Pull Requests.
- Antigravity: Focus on inline completions and complex architectural refactors.