import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FiChevronDown } from 'react-icons/fi'

import Header from '../../components/Header'
import Search from '../../components/Search'
import Modal from '../../components/Modal'
import api from '../../services/api'
import { addItem } from '../../store/ducks/cart'
import { addMessage } from "../../store/ducks/layout"

import { Container, CardList, Card, ButtonMore } from './styles'

const Comics = () => {

    const [comics, setComics] = useState([]);
    const [text, setText] = useState('')
    const [comicData, setComicData] = useState();
    const [comicId, setComicId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (text) {
            api.get(`/comics?titleStartsWith=${text}`)
                .then(response => setComics(response.data.data.results))
                .catch(e => console.log(e))
        } else {
            api.get('/comics')
                .then(response => setComics(response.data.data.results))
                .catch(e => console.log(e))
        }
    }, [text]);


    const handleMore = useCallback(
        async () => {
            if (text) {
                try {
                    const offset = comics.length;
                    const response = await api.get(`/comics?titleStartsWith=${text}`, {
                        params: {
                            offset,
                        },
                    });

                    setComics([...comics, ...response.data.data.results]);


                } catch (err) {
                    console.log(err)
                }
            } else {
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
            }
        }, [comics, text])

    async function getComic(id) {
        const comicData = await api.get(`/comics/${id}`)
            .then(response => setComicData(response.data.data.results))
            .catch(e => console.log(e));
        setComicId(id)

    }

    function addItemCart(comic) {
        dispatch(addItem(comic));

        dispatch(addMessage(`${comic.title} adicionado com sucesso!`));
    }


    return (
        <Container>
            <Header />
            <Search value={text} onChange={(search) => setText(search)} />
            <CardList>
                {comics.map(comic => {
                    return (
                        <Card key={comic.id} comic={comic}>
                            <img className="imgComic" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Capa de ${comic.title}`} />
                            <h2 className="title-comic p-0 mb-1">{comic.title}</h2>
                            <p className="p-0 mb-1">Number Pages: {comic.pageCount}</p>
                            <p className="p-0 mb-2" >Format: {comic.format}</p>
                            <button type="button" className="btn btn-outline-danger float-right mr-2" onClick={() => getComic(comic.id)}>
                                Detalhes</button>
                            <button className="btn btn-outline-danger float-left ml-2" onClick={() => addItemCart(comic)}>Selecionar</button>
                        </Card>
                    )
                })}
                {comicId && (
                    <Modal isOpen onClickClose={() => setComicId(null)}>
                        {comicData.map(data => {
                            return (
                                <div>
                                    <h2 className="modal-title">{data.title}</h2>
                                    <img className="imgComic-modal" src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt={`Capa de ${data.title}`} />
                                    <p className="p-0 mb-1">Number Pages: {data.pageCount}</p>
                                    <p className="p-0 mb-1">Format: {data.format}</p>
                                    <p className="p-0 mb-2">Description: {data.description}</p>
                                </div>
                            )
                        })}
                    </Modal>
                )}
            </CardList>
            <ButtonMore onClick={handleMore}>
                <FiChevronDown size={20} />
                Mais
                <FiChevronDown size={20} />
            </ButtonMore>
        </Container>)
}

export default Comics;