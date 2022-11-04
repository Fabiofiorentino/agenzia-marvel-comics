import { useEffect, useState } from "react"
import md5 from 'md5';
import { Container, CardList, Card, Header, CardCheckout } from "./styles";

const comicsUrl = 'http://gateway.marvel.com/v1/public/comics?';

const publicKey = 'd62b88e04eff9a562ad8f739b0a36124';
const privateKey = '99f3972c13b4d722adefae2ca0e758c5ff70d36d';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

interface ComicsData {
  id: string,
  title: string,
  description: string,
  thumbnail: {
      extension: string,
      path: string,
  },
  prices: {
      price: string,
  }
}

interface CheckoutInfo {
      id: string,
      title: string,
}

const Comics: React.FC = () => {

  const [ comics, setComics ] = useState<ComicsData[]>([]);
  const [ indexList, setIndexList ] = useState<number[]>([]);
  const [ checkout, setCheckout ] = useState<CheckoutInfo[]>([{
    id: '',
    title: ''
  }])
  
  const generateRandonIndex = () => {
    const indexRandonList: number[] = [];
    for(let i = 0; i < 2; i+= 1) {
      indexRandonList.push(Math.floor(Math.random() * 19))
    }    
    setIndexList(indexRandonList);
  }


  async function getComicsApi(): Promise<void> {
    const fetchApi = await fetch(`${comicsUrl}ts=${time}&apikey=${publicKey}&hash=${hash}`);
    const responseJson = await fetchApi.json();
    console.log(responseJson.data.results)
    const list = responseJson.data.results;
    setComics(list);
  }

  const btnAdicionar = (id: string, title: string ) => {
    setCheckout([
      ...checkout,
      {
      id,
      title,
    }])
  }

  useEffect(() => {
    generateRandonIndex();
    getComicsApi();
  }, []);

    
    return (
        <Container>
          <CardList> 
          <Header>
            <h1>Marvel Comics</h1>
          </Header>           
            {comics.map((comic, index) => (
              <Card key={comic.id} thumbnail={comic.thumbnail}>
                <div id="img" />
                  <h3>{comic.title}</h3>
                  <p>{comic.description}</p>
                  {indexList[0] === index ||indexList[1] === index && 
                  <p className="raro">RARO</p>
                  }
                  <button type="button"
                    value={comic.title}
                    id={comic.id}
                    onClick={({currentTarget}) => btnAdicionar(currentTarget.id, currentTarget.value)}>
                  Adicionar
                  </button> 
              </Card>
            ))}
          </CardList>
          <CardCheckout>
            <h2>Comics List</h2>
            <div>
              {checkout.map((check) => (
                <div className="checkout">
                  <h3>{check.id}</h3>
                  <p>{check.title}</p>
                </div>
              ))}
            </div>
          </CardCheckout>
        </Container>
    )
}

export default Comics;