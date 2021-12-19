import React from 'react';
// import { Link } from "react-router-dom"
// import api from "./services/api.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inin from "./components/Inin"
import QNoticia from "./components/QNoticia"
import Noticiav from "./components/Noticiav"
import Noticiae from "./components/Noticiae"
import './App.css';

function App() {

  return (
	<BrowserRouter>
			<div>
			<Inin/>
				<Routes>
					<Route path='/' element={<Noticiav />} />
					<Route path=':idNoticia' element={<QNoticia />} />
				</Routes>
			</div>
  </BrowserRouter>
  );
}

export default App;

    