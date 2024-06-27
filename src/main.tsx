import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import QueryProvider from './libs/react-query/query-provider.tsx'
import ConfigAntdTheme from './libs/antd/config-theme.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/libs/redux-toolkit/store.ts'
import '@/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigAntdTheme>
      <BrowserRouter>
        <Provider store={store}>
          <QueryProvider>
            <App />
          </QueryProvider>
        </Provider>
      </BrowserRouter>
    </ConfigAntdTheme>
  </React.StrictMode>
)
