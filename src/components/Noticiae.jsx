import React from 'react'
import { Link } from 'react-router-dom';

import Noticiav from './Noticiav'
import { formatDate } from '../services/utils'
import './noticiav.css'

function Noticiae(props) {
	return (
		<div class="card-body">
			<div>
				<span class="autor">{props.autor} </span>
				<span class="autor">{formatDate(props.data)}</span>
			</div>
			<Link to={props.idNoticia}>
				<h3>{props.titulo}</h3>        
			</Link>
      <h5>{props.descricao}</h5>
		</div>
	)
}

export default Noticiae