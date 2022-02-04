import { useState } from "react";
import { Container } from "react-bootstrap";

const GetPhoto = ({ theCity }) => {
  const [imageLink, setImageLink] = useState("");

  async function getImage() {
    let imageCity = "";
    let response = await fetch(
      `https://pixabay.com/api/?key=25521224-067cb032904da2f120a0b95e2&q=${theCity}&image_type=photo`
    );

    if (response.status === 200) {
      const imageJson = await response.json();
      imageCity =
        imageJson?.hits[1]?.webformatURL || imageJson?.hits[0]?.webformatURL;
    } else {
      throw new Error("Unable to fetch image");
    }

    return setImageLink(imageCity);
  }

  return (
    <>
      <Container
        style={{ background: "transparent" }}
        className="fetched-photo"
      >
        <img className="randomCityImg" src={imageLink} onChange={getImage()} />
      </Container>
    </>
  );
};

export default GetPhoto;
