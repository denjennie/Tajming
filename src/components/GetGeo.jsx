import React, { useEffect, useState } from "react";

const GetGeo = () => {
  const [details, setDetails] = useState(null);
  const [timeString, setTimeString] = useState(new Date().toLocaleTimeString());

  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708"
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  useEffect(() => {
    getUserGeolocationDetails();
    const timer = setInterval(() => {
      setTimeString(new Date().toLocaleTimeString());
    }, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div id="geo">
      <div className="geo-container">
        {details && (
          <ul className="list-group">
            <p>
              {`${details.city} ${details.country_name}(${details.country_code})`}
            </p>
          </ul>
        )}
      </div>
    </div>
  );
};

export default GetGeo;
