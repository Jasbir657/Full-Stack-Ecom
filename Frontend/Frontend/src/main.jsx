import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './Routes/AppRoute'
import {ToastContainer} from "react-toastify"
import {Provider} from "react-redux"
import {Store} from './app/Store'

createRoot(document.getElementById('root')).render(

<Provider store={Store}>
<AppRoute/>
<ToastContainer position="top-right" autoClose={3000}/>
</Provider>

)
