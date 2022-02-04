import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from '../components/Loader';
import "../Styles/Time.css";

let city1 = "London";
let city2 = "New York";
let city3 = "Paris";
let city4 = "Tokyo";
let city5 = "Sydney";

let city1TimeZone = "";
let city2TimeZone = "";
let city3TimeZone = "";
let city4TimeZone = "";
let city5TimeZone = "";

let city1Time = "";
let city2Time = "";
let city3Time = "";
let city4Time = "";
let city5Time = "";

async function getTimeZones() {
  let rawData = await fetch("./src/jsonfiles/cities-timezones.json");
  let cities = await rawData.json();

  for (let i = 0; i < cities.length; i++) {
    if (city1 == cities[i].city) {
      city1TimeZone = cities[i].timezone;
    }
    if (city2 == cities[i].city) {
      city2TimeZone = cities[i].timezone;
    }
    if (city3 == cities[i].city) {
      city3TimeZone = cities[i].timezone;
    }
    if (city4 == cities[i].city) {
      city4TimeZone = cities[i].timezone;
    }
    if (city5 == cities[i].city) {
      city5TimeZone = cities[i].timezone;
    }
  }
}

async function getTime1() {
  let response = await fetch(
    `http://worldtimeapi.org/api/timezone/${city1TimeZone}`
  );

  if (response.status === 200) {
    const time = await response.json();
    city1Time = time.datetime;
  } else {
    throw new Error("Unable to fetch data");
  }
}

async function getTime2() {
  let response = await fetch(
    `http://worldtimeapi.org/api/timezone/${city2TimeZone}`
  );

  if (response.status === 200) {
    const time = await response.json();
    city2Time = time.datetime;
  } else {
    throw new Error("Unable to fetch data");
  }
}

async function getTime3() {
  let response = await fetch(
    `http://worldtimeapi.org/api/timezone/${city3TimeZone}`
  );

  if (response.status === 200) {
    const time = await response.json();
    city3Time = time.datetime;
  } else {
    throw new Error("Unable to fetch data");
  }
}

async function getTime4() {
  let response = await fetch(
    `http://worldtimeapi.org/api/timezone/${city4TimeZone}`
  );

  if (response.status === 200) {
    const time = await response.json();
    city4Time = time.datetime;
  } else {
    throw new Error("Unable to fetch data");
  }
}

async function getTime5() {
  let response = await fetch(
    `http://worldtimeapi.org/api/timezone/${city5TimeZone}`
  );

  if (response.status === 200) {
    const time = await response.json();
    city5Time = time.datetime;
  } else {
    throw new Error("Unable to fetch data");
  }
}

function Time() {
  getTimeZones();

  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");
  const [time3, setTime3] = useState("");
  const [time4, setTime4] = useState("");
  const [time5, setTime5] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(async () => {
      await getTime1();
      await getTime2();
      await getTime3();
      await getTime4();
      await getTime5();
      setTime1(city1Time);
      setTime2(city2Time);
      setTime3(city3Time);
      setTime4(city4Time);
      setTime5(city5Time);

      setIsLoading(false);
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Container className="clock-box">
        <Row>
          <Col className="small-clock">
            <a href={city1}>
              <h3>{city1}</h3>
              {isLoading && <Loader />}
              <h3>{`${time1.substring(11, 19)}`}</h3>
              <h6>{`${time1.substring(26, 32)}`}</h6>
            </a>
          </Col>
          <Col className="small-clock">
            <a href={city2}>
              <h3>{city2}</h3>
              {isLoading && <Loader />}
              <h3>{`${time2.substring(11, 19)}`}</h3>
              <h6>{`${time2.substring(26, 32)}`}</h6>
            </a>
          </Col>
          <Col className="small-clock">
            <a href={city3}>
              <h3>{city3}</h3>
              {isLoading && <Loader />}
              <h3>{`${time3.substring(11, 19)}`}</h3>
              <h6>{`${time3.substring(26, 32)}`}</h6>
            </a>
          </Col>
          <Col className="small-clock">
            <a href={city4}>
              <h3>{city4}</h3>
              {isLoading && <Loader />}
              <h3>{`${time4.substring(11, 19)}`}</h3>
              <h6>{`${time4.substring(26, 32)}`}</h6>
            </a>
          </Col>
          <Col className="small-clock">
            <a href={city5}>
              <h3>{city5}</h3>
              {isLoading && <Loader />}
              <h3>{`${time5.substring(11, 19)}`}</h3>
              <h6>{`${time5.substring(26, 32)}`}</h6>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Time;
