import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-inline: 100px;
  & h1 {
    font-size: 24px;
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  padding-top: 50px;
  display: flex;
  background-color: #f3f3f3;
  height: 100%;
  flex-wrap: wrap;
  padding-inline: 100px;
  justify-content: center;
  gap: 50px;
`;

const Country = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  & img {
    width: 250px;
    object-fit: fill;
    height: 150px;
  }

  & .country-info {
    background-color: white;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding-inline: 20px;
    padding-bottom: 25px;
    align-items: start;
    & .country-name {
      font-size: 20px;
      margin-block: 8px;
      text-align: start;
    }
    & p {
      margin: 0;
    }
  }
`;

function App() {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountriesList(response.data);
    });
  }, []);

  return (
    <Container>
      <NavBar>
        <h1> Where in world?</h1>
      </NavBar>
      <Content>
        {countriesList.map((country) => (
          <Country key={country.name.common}>
            <img src={country.flags.png} />
            <div className="country-info">
              <strong className="country-name">{country.name.common}</strong>
              <p>
                <b>Population:</b> {country.population}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Capital:</b> {country.capital}
              </p>
            </div>
          </Country>
        ))}
      </Content>
    </Container>
  );
}

export default App;
