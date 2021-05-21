import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    width:100%;
    height:100%;

`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


export const Card = styled.div`

    background-color:#f1f1f1;
    height: 550px;
    width:300px;
    margin:10px;
    border-radius: 5px;
    overflow:hidden;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

    h2, p {
        padding:5px;
        text-align: justify;
    }

    .imgComic{
        height:400px;
        width:100%;
        background: no-repeat center;
        background-size: cover;
    }

    .title-comic{
        padding:5px;
        text-align: justify;
        max-width: 270px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

`;

export const ButtonDetails = styled.div`
    background: #fff;
    height : 30px;
    width: 100px;
    float:right;
    padding: 4px;
    text-align: center;
    border-radius: 5px;
    transition: all 0.3s;

    cursor:pointer;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
    margin-right: 10px;

    &:hover{
        background:#ec1d24;
    }
`;

export const ButtonSelect = styled.div`
    background: #fff;
    height : 30px;
    width: 100px;
    float:left;
    padding: 4px;
    text-align: center;
    border-radius: 5px;
    transition: all 0.3s;

    cursor:pointer;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
    margin-left: 10px;

    &:hover{
        background:#ec1d24;
    }
`;

export const ButtonMore = styled.div`
    background: #fff;
    height : 40px;
    margin: 20px auto;
    padding: 0 50px;
    border-radius: 5px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    transition: all 0.3s;

    cursor:pointer;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

    &:hover{
        background:#ec1d24;
    }

    svg{
        margin: 0 8px;
    }
`;