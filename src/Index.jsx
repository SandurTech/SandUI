import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SandThemeProvider } from './SandThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SandThemeProvider>
      <div style={{ padding: '48px', fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>
        <h1>SandUI</h1>
        <p>Run <code>npm run storybook</code> to view the design system.</p>
      </div>
    </SandThemeProvider>
  </StrictMode>,
)