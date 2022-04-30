/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useState } from 'react';
import { Theme } from '../../utils/components/Card';
import { useTranslation } from "react-i18next";
import './styles.css';

const CardButton = React.lazy(() => import("controlbtns/CardButton"));
const GridMovies = React.lazy(() => import("gridmovies/GridMovies"));


function Home() {
    const { i18n, t } = useTranslation(["common"]);
    const [theme, setTheme] = useState("movies");
    return (
        <div className='Home'>
            <Theme theme={theme} >
                <Suspense fallback={null}>
                    <CardButton btn1Text={t("showPeliculaBtn1")}
                        btn2Text={t("showPeliculaBtn2")} />
                    <GridMovies i18n={{
                        t: t,
                        i18n: i18n
                    }} />
                </Suspense>
            </Theme>
        </div>
    );
}

export default Home;
