import React from "react";
import { useState } from "react";
import "../../Styles/myCities.css";
import { Link } from "react-router-dom";
import Modal from "../Modal";

export default function MyCities({ cities }) {
  /**
   * Renders a component containing links for the given list of cities.
   * The links reroutes to a detailed view for that city.
   */

  // fetching locally stored cities from utility function did not return
  // the updated data, it must therefore be fetched directly from component
  let localCities;
  try {
    localCities = JSON.parse(localStorage.storedCities);
  } catch (error) {
    localCities = [];
  }

  const [storedCities, setCities] = useState(localCities);
  const [showModal, setShowModal] = useState(false);

  // A function that filters the storedCities state variable on the
  // given index.Then sets the localStorage.storedCities to the
  // filtered array and calls setCities to set the value of the
  // storedCities state variable.
  const removeCity = (index) => {
    let filteredCities = storedCities.filter((item) => {
      return item !== storedCities[index];
    });

    localStorage.storedCities = JSON.stringify(filteredCities);
    setCities(filteredCities);
  };

  // A function removes the locally stored list of cities if given parameter
  // is true. Sets the showModal state variable to false.
  const localStorageClear = (userChoice) => {
    if (userChoice) {
      localStorage.clear();

      setCities([]);
    }
    setShowModal(false);
  };

  return (
    <div className="cities-container">
      {
        /**
         * When the showModal stateVariable has the value true a Modal component
         * is displayed that prompts the user to accept or cancel the clearing
         * of localStorage.
         */
        showModal && (
          <Modal
            message={"Alla dina tillagda städer kommer att tas bort."}
            question={"Vill du fortsätta?"}
            callback={localStorageClear}
          />
        )}

      <div className="cities-outer-wrapper">
        <div className="cities-inner-wrapper">
          <h1>Mina Städer</h1>

          {
            /**
             * Maps the content of storedCities and renders a <Link> containing
             * a <div> with the city name for each element.
             * Additionally a div with functionality to remove each city is rendered.
             */
            storedCities &&
            storedCities.map((item, i) => (
              <div key={i} className="city-link-wrapper">
                <Link to={`/${item.city}`} className="link-item">
                  <div>{item.city}</div>
                </Link>
                <div onClick={() => removeCity(i)} className="remove-city">
                  X
                </div>
              </div>
            ))
          }

          {
            /**
             * If the length of storedCities is greater than 0 a button with functionality
             * to clear localStorage will be rendered.
             */
            storedCities.length > 0 && (
              <div className="clear-my-cities">
                <div onClick={() => setShowModal(true)}>Rensa Mina Städer</div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
