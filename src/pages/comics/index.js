import { useEffect, useState, useCallback } from 'react';
import { FiChevronDown } from 'react-icons/fi'
import Search from './../../components/Search'

import api from '../../services/api'

import { Container, CardList, Card, ButtonDetails, ButtonSelect, ButtonMore } from './styles'

const Comics = () => {

    const [comics, setComics] = useState([]);
    const [text, setText] = useState('')

    useEffect(() => {
        api.get('/comics')
            .then(response => setComics(response.data.data.results))
            .catch(e => console.log(e))
    }, []);

    useEffect(() => {
        console.log(text);
    }, [text])


    const handleMore = useCallback(
        async () => {
            try {
                const offset = comics.length;
                const response = await api.get('comics', {
                    params: {
                        offset,
                    },
                });

                setComics([...comics, ...response.data.data.results]);


            } catch (err) {
                console.log(err)
            }
        }, [comics])

    return (
        <Container>
            <Search value={text} onChange={(search) => setText(search)} />
            <CardList>
                {comics.map(comic => {
                    return (
                        <Card key={comic.id} >
                            <img className="imgComic" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Capa de ${comic.title}`} />
                            {comic.title.length > 27
                                ? <h2>{comic.title.substr(0, 27)}...</h2>
                                : <h2>{comic.title}</h2>
                            }

                            <p>Number Pages: {comic.pageCount}</p>
                            <p>Format: {comic.format}</p>
                            <ButtonDetails>Detalhes</ButtonDetails>
                            <ButtonSelect>Selecionar</ButtonSelect>
                        </Card>
                    )
                })}
            </CardList>
            <ButtonMore onClick={handleMore}>
                <FiChevronDown size={20} />
                Mais
                <FiChevronDown size={20} />
            </ButtonMore>
        </Container>)
}

export default Comics;