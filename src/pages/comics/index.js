import { useEffect, useState, useCallback } from 'react';
import { FiChevronDown } from 'react-icons/fi'
import Search from '../../components/Search'
import Header from '../../components/Header'
import Modal from '../../components/Modal'

import api from '../../services/api'

import { Container, CardList, Card, ButtonDetails, ButtonSelect, ButtonMore } from './styles'

const Comics = () => {

    const [comics, setComics] = useState([]);
    const [text, setText] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [comicData, setComicData] = useState();
    const [comicId, setComicId] = useState(null);

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

    // const detailsComic = async (id) => {
    //     const response = await api.get(`/comics/${id}`)
    //     setIsModalVisible(true);
    //     setDetailsComic([...detailComic, ...response.data.data.results])
    //     console.log(detailComic)
    // }

    async function getComic(id) {
        const comicData = await api.get(`/comics/${id}`)
            .then(response => setComicData(response.data.data.results))
            .catch(e => console.log(e));
        console.log(comicData)
        setIsModalVisible(true)

    }


    return (
        <Container>
            <Header />
            <Search value={text} onChange={(search) => setText(search)} />
            <CardList>
                {comics.map(comic => {
                    return (
                        <Card key={comic.id} itemID={comic.id}>
                            <img className="imgComic" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={`Capa de ${comic.title}`} />
                            <h2 className="title-comic">{comic.title}</h2>
                            <p>Number Pages: {comic.pageCount}</p>
                            <p>Format: {comic.format}</p>
                            <ButtonDetails onClick={() => setComicId(comic.id)}>
                                Detalhes</ButtonDetails>
                            <ButtonSelect>Selecionar</ButtonSelect>
                        </Card>
                    )
                })}
                <Modal isOpen={Boolean(comicId)} onClickClose={() => setComicId(null)}>
                    <div>
                        <h1>Detalhes</h1>
                    </div>
                </Modal>
            </CardList>
            <ButtonMore onClick={handleMore}>
                <FiChevronDown size={20} />
                Mais
                <FiChevronDown size={20} />
            </ButtonMore>
        </Container>)
}

export default Comics;