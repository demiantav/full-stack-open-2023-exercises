
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const phonebook = [

    { name: 'Arto Hellas' },
    { name: `pepo`},
    { name: 'Hellas' },
    { name: 'Checho' },
    { name: 'Sico' },
    
  ]


ReactDOM.createRoot(document.getElementById('root')).render(<App contacts={phonebook}/>)
