
import { useEffect, useState } from 'react'
import { Grid, Image, Label } from 'semantic-ui-react'
import styled from 'styled-components'

import Loader from '../Loader';
import { movie, loading } from "gridmovies/movies";

import "semantic-ui-css/semantic.min.css";
import './styles.css'

const Container = styled.div`
  text-align: center;
`

const StrongTitle = styled.strong`
  color:#000000;
  font-size: 18px;
`

const Strong = styled.strong`
  color:#000000;
`

export const StyledGrid = styled(Grid)({
  color: 'red'
});

const GridMovies = (props) => {

  const [items, setItems] = useState(null);
  const [loadingGrid, setValue] = useState(false);

  useEffect(() => {
    const subscription = movie.subscribe((value) => {
      setItems(value ?? [])
    })
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const subscriptionLoading = loading.subscribe((value) => {
      setValue(value)
    })
    return () => {
      subscriptionLoading.unsubscribe();
    };
  }, []);

  return (
    <Container>
      {props.i18n ? <h3>{props.i18n.t("characters")}:</h3> : <h3>Personajes:</h3>}

      {loadingGrid ? <Loader/> : (items && (<StyledGrid className='MovieList'>
        {items.map((item, key) => (
          <Grid.Column mobile={16} tablet={8} computer={4} key={key + 1} >
            <div className='MovieCard'>
              <Image centered src={item.image} alt="Movie Card" />

              <p className='MovieCard-title'>
                {props.i18n && <StrongTitle>{props.i18n.t("name")}:</StrongTitle>}
                {!props.i18n && <StrongTitle> Nombre: </StrongTitle>}  {item.name}
              </p>

              {props.i18n && <Strong>{props.i18n.t("status")}: </Strong>}
              {!props.i18n && <Strong>Estado: </Strong>}

              <Label color={'blue'}>
                {props.i18n && <>{props.i18n.t(`${String(item.status).toLowerCase()}`)}</>}
                {!props.i18n && item.status}  </Label>
            </div>
          </Grid.Column>
        ))
        }
      </StyledGrid>))}
    </Container>
  );
};

export default GridMovies;