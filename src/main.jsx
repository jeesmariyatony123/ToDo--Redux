import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
// import TodoStore from './REDUX/TodoStore.js'
import { Provider } from 'react-redux'
import store from './REDUX/TodoStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
)
