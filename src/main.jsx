import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import { env } from './utils/constants/ui.constants.js'
import store from './app/store.js'
import { Provider } from 'react-redux'
import AuthInitializer from './components/AuthInitializer.jsx'




createRoot(document.getElementById('root')).render(
  // <StrictMode>
      <Provider store={store}>
        <AuthInitializer>
          <App />
        </AuthInitializer>
      </Provider>
  // </StrictMode>,
)
