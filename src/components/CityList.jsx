import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let fontStyles = [
  "Abril Fatface",
  "Alfa Slab One",
  "Architects Daughter",
  "EB Garamond",
  "Eczar",
  "Fira Sans Extra Condensed",
  "Gochi Hand",
  "Indie Flower",
  "Lobster",
  "M PLUS Rounded 1c",
  "Mochiy Pop P One",
  "Neucha",
  "Oooh Baby",
  "Orbitron",
  "Parisienne",
  "Permanent Marker",
  "Playball",
  "Sedgwick Ave",
  "Space Mono",
  "Tangerine",
  "Yeseva One",
];

async function getCities(cities) {
  let cityNames = [];

  for (let i = 0; i < cities.length; i++) {
    cityNames[i] = cities[i].city;
  }

  return cityNames;
}

let numberArray = [];

function randomizeFonts() {
  while (numberArray.length < 21) {
    let randomNumber = Math.floor(Math.random() * 21);
    if (numberArray.indexOf(randomNumber) === -1)
      numberArray.push(randomNumber);
  }
}

function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(async () => {
    let rawData = await fetch("./src/jsonfiles/cities-timezones.json");
    let citiesList = await rawData.json();
    citiesList = await getCities(citiesList);
    randomizeFonts();
    setCities(citiesList);
  }, []);

  return (
    <>
      <Container className="d-md-flex" id="cityList">
        <Col id="col1">
          <Row>
            <a href={cities[5]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[0]]}`,
                }}
              >
                {cities[5]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[6]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[1]]}`,
                }}
              >
                {cities[6]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[7]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[2]]}`,
                }}
              >
                {cities[7]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[8]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[3]]}`,
                }}
              >
                {cities[8]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[9]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[4]]}`,
                }}
              >
                {cities[9]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[10]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[5]]}`,
                }}
              >
                {cities[10]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[11]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[6]]}`,
                }}
              >
                {cities[11]}
              </h2>
            </a>
          </Row>
        </Col>
        <Col id="col2">
          <Row>
            <a href={cities[12]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[7]]}`,
                }}
              >
                {cities[12]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[13]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[8]]}`,
                }}
              >
                {cities[13]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[14]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[9]]}`,
                }}
              >
                {cities[14]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[15]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[10]]}`,
                }}
              >
                {cities[15]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[16]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[11]]}`,
                }}
              >
                {cities[16]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[17]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[12]]}`,
                }}
              >
                {cities[17]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[18]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[13]]}`,
                }}
              >
                {cities[18]}
              </h2>
            </a>
          </Row>
        </Col>
        <Col id="col3">
          <Row>
            <a href={cities[19]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[14]]}`,
                }}
              >
                {cities[19]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[20]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[15]]}`,
                }}
              >
                {cities[20]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[21]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[16]]}`,
                }}
              >
                {cities[21]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[22]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[17]]}`,
                }}
              >
                {cities[22]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[23]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[18]]}`,
                }}
              >
                {cities[23]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[24]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[19]]}`,
                }}
              >
                {cities[24]}
              </h2>
            </a>
          </Row>
          <Row>
            <a href={cities[25]}>
              <h2
                style={{
                  fontFamily: `${fontStyles[numberArray[20]]}`,
                }}
              >
                {cities[25]}
              </h2>
            </a>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default CityList;
