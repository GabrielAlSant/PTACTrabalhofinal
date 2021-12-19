import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { formatDate } from '../services/utils'
import api from '../services/api'
import './qnoticia.css'

function QNoticia() {
	let params = useParams()

	const [noticia, setNoticia] = useState([])

	useEffect(() => {
		api
			.get(`/noticias/visualizar?id=${params.idNoticia}`)
			.then(async response => {
				let {dataPublicacao, ...rest} = response.data
				dataPublicacao = await formatDate(dataPublicacao)
				await setNoticia({dataPublicacao, ...rest})
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<article>
					<h2 class="titulonoticia">{noticia.titulo}</h2>
					<h3 class="desc">{noticia.descricao}</h3>			
			<div class="conteudo">
				{noticia.conteudo}
			</div>

      <div class="rodape">
					<span >{noticia.autor} </span>
					<span>{noticia.dataPublicacao}</span>
          <Link to="/">
				<h4>Voltar ao Menu</h4>        
			    </Link>
          
				</div>
		</article>
	)
}

export default QNoticia
