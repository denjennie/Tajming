import { useState, useEffect } from "react";
import "../Styles/digital-clock.css";
import Loader from '../components/Loader';

export default function DigitalClock({ timezone }) {

    const [timeString, setTimeString] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    let specificCityTime = "";

    const getTime = async () => {
        let response = await fetch(
            `http://worldtimeapi.org/api/timezone/${timezone}`
        )

        if (response.status === 200) {
            const time = await response.json();
            specificCityTime = time.datetime;
        }
        else {
            throw new Error("Unable to fetch data");
        } 
    }

    useEffect(() => {
        if (timezone) {
            const timer = setInterval(async () => {
                await getTime();
                setTimeString(`${specificCityTime.substring(11, 19)}`);
                setIsLoading(false);
            }, 1000);
        }
        else {
            setTimeString(new Date().toLocaleTimeString());
            const timer = setInterval(() => { setTimeString(new Date().toLocaleTimeString()) }, 1000);
            setIsLoading(false);
        }
        return function cleanup() {
            clearInterval(timer);
        }
    }, []);

    return (
        <div className="digitalClock">
            <h2>
                {isLoading && <Loader />}
                {timeString}
            </h2>
        </div>
    );

}
