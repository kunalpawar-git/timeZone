import React from 'react'
import Navbar from './Navbar'

function App() {
  let a;
  var date;
  let time;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  var ust = new Date().toLocaleString(undefined, { timezone: 'america/new_york' });
  let intervalID;
  // console.log(ust)

  function getData() {
    intervalID = setInterval(() => {
      a = new Date();
      // console.log(a)
      date = a.toLocaleDateString(undefined, options);
      // console.log(date)
      time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
      document.getElementById('time').innerHTML = time + "<br>on " + date;
    }, 1000);
  }

  getData();

  function changeUs(timeZone) {
    stop()
    setInterval(() => {
      const str1 = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });


      let b = str1.split(' ');

      let time = b[1].split(':');
      console.log(b);
      let c = new Date(b[0]).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })
      // console.log(c);
      // aaa = str1;


      time = time[0] + ':' + time[1] + ':' + time[2];
      document.getElementById('time').innerHTML = time + "<br>on " + c;
    }, 1000);

  }


  function stop() {
    clearInterval(intervalID);
  }

  var date = new Date();
  function changeTimeZone(timeZone) {
    const str1 = new Date().toLocaleString('en-US', { timeZone: timeZone });
    changeUs(timeZone);
  }

  function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: 'America/New_York' }));
  }

  return (

    <div className="">
      <header className="App-header">
        <Navbar />
        <div className="container my-4">
          <div className="jumbotron">
            <h1 className="display-4">Current time Is: <span id="time"></span></h1>
            <p className="lead">We have got you covered. This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.</p>

            <p>We are here to show you the time for different countries</p>
            <div className="dropdown show">
              <a className="btn btn-primary btn-lg" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                Browse Times
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#" >US time</a>
                <a className="dropdown-item" href="#">EU time</a>
                <a className="dropdown-item" href="#">Middle East time</a>

              </div>
            </div>

          </div>
        </div>
      </header >


    </div >
  )
}

export default App
