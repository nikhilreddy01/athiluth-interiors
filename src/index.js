import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css";
import { createBrowserHistory } from "history";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
const history = createBrowserHistory();

ReactDOM.render(
  // <BrowserRouter history={history}>
    <App/>
  // </BrowserRouter>
  ,
  document.getElementById('root')
)