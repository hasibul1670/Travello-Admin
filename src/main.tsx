import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './App.css';
import LayoutRouter from "./Routes/Routes";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      
         <LayoutRouter />
      
  </React.StrictMode>,
)
