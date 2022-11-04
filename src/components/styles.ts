import styled from "styled-components";

interface Thumbnail {
    thumbnail: {
        extension: string,
        path: string,
    },
}

export const Container = styled.main`
    display: grid;
    grid-template-columns: 3fr 1fr;

    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
    height: 100%;
`;

export const Header = styled.h3`
    height: 60px;
    width: 100%;
    background: red;
    text-align: center;
    color: white;
    align-items: center;
    padding: 5px;
`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const urlImg = (props: Thumbnail) => `${props.thumbnail.path}.${props.thumbnail.extension}`

export const CardCheckout = styled.div`
    display: inline-block;
    flex-wrap: wrap;
    justify-content: center;
    background: #f1f1f1;

    div.checkout {
        margin: 1%;
        border: 1px solid #f1f1f1;
        background-color: beige;
    }

    h2 {
        padding: 15px;
        text-align: justify;
        color: white;
        background: #8B0000;
    }
`;

export const Card = styled.div`
    background: #f1f1f1;
    height: 400px;
    width: 275px;
    margin: 7px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0,3);

    h2, p, button {
        padding: 5px;
        text-align: justify;
        color: black;
    } 

    div#img {
        height: 400px;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;

        transition: all 1s;
    }
    
    p.raro {
        margin: 2%;
        width: 50%;
        border: 1px #f1f1f1;
        background-color: gold;
        justify-content: center;
        text-align: center;
    }

    &:hover {
        div#img {
            height: 5px;
        }
    }
`;