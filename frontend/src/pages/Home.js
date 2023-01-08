import React, { useState } from 'react';

export const Home = (props) => {

    const [source, setSource] = useState('Cluj Napoca, Romania');
    const [destination, setDestination] = useState('Cluj Napoca, Romania');
    const [cabinClass, setCabinClass] = useState('Economy');
    const [date, setDate] = useState('');

    const [nrOfAdults,setNrOfAdults] = useState(0);
    const [nrOfStudents,setNrOfStudents] = useState(0);
    const [nrOfSeniors,setNrOfSeniors] = useState(0);
    const [nrOfYouths,setNrOfYouths] = useState(0);
    const [nrOfChildrens,setNrOfChildrens] = useState(0);


    function handleQuery() {
        fetch('http://localhost:5109/api/travel', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Traveler: props.currentUser,
                Source: source,
                Destination: destination,
                CabinClass: cabinClass,
                Date: date,
                NrOfAdults: nrOfAdults,
                NrOfStudents: nrOfStudents,
                NrOfSeniors: nrOfSeniors,
                NrOfYouths: nrOfYouths,
                NrOfChildrens: nrOfChildrens
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed with error: ' + error);
                })
    }


    function handleSubmit(ev) {
        if(!props.isUserLoggedIn){
            alert("You must be logged in to make place a new trip");
            return;
        }
        if(date===''){
            alert("Select the date you want to make the trip");
            return;
        }
        if(nrOfAdults+nrOfStudents+nrOfSeniors+nrOfYouths+nrOfChildrens===0){
            alert("To place the trip you need at least 1 traveler")
            return;
        }
        handleQuery();
    }

    return (
        <div class="backgroundStyle">
            <h3>Welcome to Home page</h3>
            <div className="container p-5">
                <select
                    className="costum-select"
                    onChange={(e) => {
                        setSource(e.target.value);
                    }}>
                    <option value="Cluj Napoca, Romania">Cluj Napoca, Romania</option>
                    <option value="Bucharest, Romania">Bucharest, Romania</option>
                    <option value="Satu Mare, Romania">Satu Mare, Romania</option>
                    <option value="Budapest, Hungary">Budapest, Hungary</option>
                    <option value="Debrecen, Hungary">Debrecen, Hungary</option>
                    <option value="Viena, Austria">Viena, Austria</option>
                    <option value="Strasbourg, Germany">Strasbourg, Germany</option>
                    <option value="Hamburg, Germany">Hamburg, Germany</option>
                    <option value="Rotterdam, Olanda">Rotterdam, Olanda</option>
                    <option value="Bruxelles, Belgium">Bruxelles, Belgium</option>
                    <option value="Paris, France">Paris, France</option>
                    <option value="Lisabona, Portugal">Lisabona, Portugal</option>
                    <option value="Madrid, Spain">Madrid, Spain</option>
                    <option value="Roma, Italy">Roma, Italy</option>
                    <option value="Milano, Italy">Milano, Italy</option>
                    <option value="Sofia, Bulgary">Sofia, Bulgary</option>
                    <option value="Kopaida, Greece">Kopaida, Greece</option>
                    <option value="Istanbul, Turkey">Istanbul, Turkey</option>
                </select>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <select
                    className="costum-select"
                    onChange={(e) => {
                        setDestination(e.target.value);
                    }}>
                    <option value="Cluj Napoca, Romania">Cluj Napoca, Romania</option>
                    <option value="Bucharest, Romania">Bucharest, Romania</option>
                    <option value="Satu Mare, Romania">Satu Mare, Romania</option>
                    <option value="Budapest, Hungary">Budapest, Hungary</option>
                    <option value="Debrecen, Hungary">Debrecen, Hungary</option>
                    <option value="Viena, Austria">Viena, Austria</option>
                    <option value="Strasbourg, Germany">Strasbourg, Germany</option>
                    <option value="Hamburg, Germany">Hamburg, Germany</option>
                    <option value="Rotterdam, Olanda">Rotterdam, Olanda</option>
                    <option value="Bruxelles, Belgium">Bruxelles, Belgium</option>
                    <option value="Paris, France">Paris, France</option>
                    <option value="Lisabona, Portugal">Lisabona, Portugal</option>
                    <option value="Madrid, Spain">Madrid, Spain</option>
                    <option value="Roma, Italy">Roma, Italy</option>
                    <option value="Milano, Italy">Milano, Italy</option>
                    <option value="Sofia, Bulgary">Sofia, Bulgary</option>
                    <option value="Kopaida, Greece">Kopaida, Greece</option>
                    <option value="Istanbul, Turkey">Istanbul, Turkey</option>
                </select>
            </div>
            <div className="container p-1">
            {"Select cabin class"} &nbsp; &nbsp;
            <select
                    className="costum-select"
                    onChange={(e) => {
                        setCabinClass(e.target.value);
                    }}>
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business</option>
                    <option value="First">First</option>
                </select>
            </div>
            <div className="container p-1">
                {"Adults"}
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="control__btn" disabled={nrOfAdults<=0} onClick={() => setNrOfAdults(nrOfAdults -1)}>-</button>
                &nbsp; {nrOfAdults} &nbsp;
                <button className="control__btn" disabled={nrOfAdults>=8} onClick={() => setNrOfAdults(nrOfAdults +1)}>+</button>
            </div>
            <div className="container p-1">
                {"Students"}
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="control__btn" disabled={nrOfStudents<=0} onClick={() => setNrOfStudents(nrOfStudents -1)}>-</button>
                &nbsp; {nrOfStudents} &nbsp;
                <button className="control__btn" disabled={nrOfStudents>=8} onClick={() => setNrOfStudents(nrOfStudents +1)}>+</button>
            </div>
            <div className="container p-1">
                {"Seniors"}
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="control__btn" disabled={nrOfSeniors<=0} onClick={() => setNrOfSeniors(nrOfSeniors -1)}>-</button>
                &nbsp; {nrOfSeniors} &nbsp;
                <button className="control__btn" disabled={nrOfSeniors>=8} onClick={() => setNrOfSeniors(nrOfSeniors +1)}>+</button>
            </div>
            <div className="container p-1">
                {"Youths"}
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="control__btn" disabled={nrOfYouths<=0} onClick={() => setNrOfYouths(nrOfYouths -1)}>-</button>
                &nbsp; {nrOfYouths} &nbsp;
                <button className="control__btn" disabled={nrOfYouths>=8} onClick={() => setNrOfYouths(nrOfYouths +1)}>+</button>
            </div>
            <div className="container p-1">
                {"Children"}
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="control__btn" disabled={nrOfChildrens<=0} onClick={() => setNrOfChildrens(nrOfChildrens -1)}>-</button>
                &nbsp; {nrOfChildrens} &nbsp;
                <button className="control__btn" disabled={nrOfChildrens>=8} onClick={() => setNrOfChildrens(nrOfChildrens +1)}>+</button>
            </div>
            &nbsp;
            <div>
                {"Select traveling date"} &nbsp; &nbsp;
                <input type="date" onChange={(e) => setDate(e.target.value)}></input>
            </div>
            &nbsp;
            &nbsp;
            <div>
                <button type="submit" className="btn btn-primary" onClick={() => handleSubmit()}>Place</button>
            </div>
        </div>
    )
}