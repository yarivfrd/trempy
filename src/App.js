import { useEffect, useState } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/Home/Home';
import RidePage from './routes/RidePage/RidePage';
import RideContactPage from './routes/RideContactPage/RideContactPage';
import NewRidePage from './routes/NewRidePage/NewRidePage';

function App() {

  const API_URL = 'https://trempy.herokuapp.com/data';
  const [data, setData] = useState({});

  // new ride form state
  const [generalDestination, setGeneralDestination] = useState(null);
  const [location, setLocation] = useState(null);
  const [timeAndDate, setTimeAndDate] = useState(null);
  const [fee, setFee] = useState(null);
  const [name, setName] = useState(null);
  const [tel, setTel] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(API_URL)
      .then(res => res.json())
      .then(resData => setData(resData.rides));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit');
    console.log(`generalDestination: ${generalDestination}`);
    console.log(`location: ${location}`);
    console.log(`timeAndDate: ${timeAndDate}`);
    console.log(`fee: ${fee}`);
    console.log(`name: ${name}`);
    console.log(`tel: ${tel}`);
    console.log(`details: ${details}`);
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home data={data} />} />
        <Route path="ride">
          <Route
            index
            element={<NewRidePage
              handleSubmit={handleSubmit}
              setGeneralDestination={setGeneralDestination}
              setLocation={setLocation}
              setTimeAndDate={setTimeAndDate}
              setFee={setFee}
              setName={setName}
              setTel={setTel}
              setDetails={setDetails}
              />
            }
          />
          <Route path=":id">
            <Route index element={<RidePage data={data} />} />
            <Route path="contact" element={<RideContactPage data={data} />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
