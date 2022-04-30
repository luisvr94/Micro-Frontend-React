import styled from "styled-components"
import { above } from "../../styles"

export const colors = {
  green: "#98ca3f",
  orange: "#f8b71c",
  gray: "#969696",
  darkBlue: "#1c3643",
  lightBlue: "#1e5372",
  softGray: "#f6f8f9",
  white: "#FFFFFF"
}

export const StyledHeader = styled.header`
  box-shadow: -1px 7px 12px -6px rgba(0,0,0,0.75);
            -webkit-box-shadow: -1px 7px 12px -6px rgba(0,0,0,0.75);
            -moz-box-shadow: -1px 7px 12px -6px rgba(0,0,0,0.75);
  background-color:${colors.white};
  margin-bottom: 0;
  padding: 0 0.5rem 0 0;
  height: 3.5rem;
  width: 100%;
  max-width: 960;
  display: flex;
  position: fixed;
  z-index: 3;
  align-items: center;
  justify-content: space-between;
  a {
    height: 100%;
    font-size: 0.6rem;
  }
  & > a > img {
    margin: 0;
    background-color: ${colors.green};
    height: 100%;
    padding: 0.5rem 0.8rem;
  }
  & ul {
    list-style: none;
    margin: 0;
    display: flex;
    font-size: 0.2rem;
  }
  ${above.medium`
    padding: 0 2rem;
    height: 3.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
  ${above.large`
    padding: 0 10rem;
    height: 4.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
`

export const StyledCart = styled.div`
  padding: 1rem;
  height: 80vh;
  overflow-y: scroll;
  h2 {
    border-bottom: 2px solid ${colors.darkBlue};
    color: ${colors.darkBlue};
  }
  & th {
    color: #959595;
    margin: 0;
    border: none;
  }
  & img {
    vertical-align: middle;
    width: 60px;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${colors.darkBlue};
    div {
      display: flex;
      align-items: baseline;
      width: 250px;
      justify-content: space-between;
    }
  }
  & small {
    color: #505050;
    font-size: 0.9rem;
  }
  ${above.medium`
    padding: 1rem 3rem;
  `}
  ${above.large`
    padding: 5rem 10rem;
  `}
`

export const MenuItem = styled.li`
  margin: 0;
  color: white;
  font-size: 1.3rem;
  font-weight: 100;
  padding: ${({ margin }) => (margin ? "0 13px 0 13px" : "0 0 0 13px")};
  a {
    color: white;
    text-decoration: none;
  }
  & img {
    margin-right: 5px;
    width: 0.4rem;
  }
  ${above.medium`
    // border-right: ${({ margin }) => (margin ? "1px solid white" : "")};
    padding: ${({ margin }) => (margin ? "0 26px 0 26px" : "0 0 0 26px")};
    & img{
      margin-right: 5px; 
      width: 0.7rem;
    }
  `}
`


export const SizeButton = styled.button`
  padding: calc(0.4rem + 1px);
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: #272727;
  opacity: ${({ unavailable }) => (unavailable ? 0.4 : 1)};
  transition: 0.4s all ease;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.2);
  }
`

export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ type }) =>
    type === "outline" ? "transparent" : colors.green};
  color: ${({ type }) => (type === "outline" ? colors.darkBlue : "white")};
  font-size: 0.9rem;
  padding: 0.6rem 1rem;
  font-weight: 500;
  border: ${({ type }) =>
    type === "outline"
      ? `3px solid ${colors.darkBlue}`
      : `3px solid ${colors.green}`};
  border-radius: 12px;
  a {
    text-decoration: none;
    color: ${({ type }) => (type === "outline" ? colors.darkBlue : "white")};
  }
  &:disabled {
    background-color: ${colors.gray};
    border-color: ${colors.gray};
    cursor: not-allowed;
  }
`

export const Content = styled.div`
  ${above.medium`
    padding-top: 3.5rem;
    `}
  ${above.large`
    padding-top: 4.5rem;
  `}
`