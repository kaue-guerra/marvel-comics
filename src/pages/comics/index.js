import { useEffect, useState } from 'react';
import api from '../../services/api'

import { Container } from './styles'

const Comics = () => {

    const [comics, setComics] = useState([]);

    useEffect(() => {
        api.get('/comics')
            .then(response => setComics(response.data.data.results))
            .catch(e => console.log(e))
    }, [])

    return (<Container>
        <h1>Comics</h1>
        <ul>
            {comics.map(comic => {
                return (
                    <li>
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Capa de ${comic.name}`} />
                        <span className="name" >{comic.name}</span>
                    </li>
                )
            })}
        </ul>
    </Container>)
}

export default Comics;