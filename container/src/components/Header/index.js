
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next"

import { Title } from '../../utils/components/Title';
import { MenuItem, StyledHeader } from "./style"


const Header = ({ siteTitle }) => {

    const { i18n, t } = useTranslation(["common"]);

    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en");
        }
    }, []);

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <StyledHeader>
            <nav>
                <ul>
                    <MenuItem margin>
                        <Title>{t("titleheader")}</Title>
                    </MenuItem>
                </ul>
            </nav>
            <MenuItem margin>
                <select
                    className="nav-link bg-dark border-0 ml-1 mr-2"
                    value={localStorage.getItem("i18nextLng")}
                    onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
            </MenuItem>
        </StyledHeader>
    )
}

export default Header