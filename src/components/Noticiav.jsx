import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Noticiae from './Noticiae'
import api from '../services/api'
import './noticiav.css'

function Noticiav() {

	const [noticias, setNoticias] = useState([])

	useEffect(() => {
		api
			.get('/noticias')
			.then(response => {
				setNoticias(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<div>

			{
				noticias.map(noticia => {
					return (          
						<div key={noticia._id}>
							<Noticiae idNoticia={noticia._id} titulo={noticia.titulo} autor={noticia.autor}  data={noticia.dataPublicacao} descricao={noticia.descricao} />
						</div>       
					)
				})
			}

		</div>
	)
}

export default Noticiav