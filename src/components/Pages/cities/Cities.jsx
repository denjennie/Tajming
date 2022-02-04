import React from "react";

import { useParams } from "react-router-dom";
import DigitalClock from "../../DigitalClock";
import "../../../Styles/DetailViewCities.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GetPhoto from "../../GetPhoto";

export const Cities = (props) => {
  let { city } = useParams();

  let cityData = props.cities.find((x) => x["city"] == city);

  if (!cityData) {
    let storedCities;
    try {
      storedCities = JSON.parse(localStorage.storedCities);
    } catch (error) {
      storedCities = [];
    }
    cityData = storedCities.find((x) => x["city"] == city);
  }

  return (
    <Container fluid id="city-container">
      <Row id="city-row">
        <Col id="city-col">
          {cityData && (
            <>
              <h1>{cityData.city.replace("_", " ")}</h1>
              <DigitalClock timezone={cityData.timezone} />
              <h2 id="TimeZone">{cityData.timezone.replace("_", " ")}</h2>

              {cityData.img ? (
                <img id="cityImg" src={cityData.img} />
              ) : (
                <GetPhoto theCity={city} />
              )}

              {cityData.info && <p>{cityData.info}</p>}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};
