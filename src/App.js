import React from "react";
import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/COVID-19.png";
import NavBar from "./Components/Pages/NavBar";
import { Route, Switch } from 'react-router'
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Resources from "./Components/Pages/Resources";
import Jumbotron from "./Components/Sections/Jumbotron";
import Features from "./Components/Sections/Features";
import Options from "./Components/Sections/Options";
import Footer from "./Components/Pages/Footer";
import Team from "./Components/Pages/Team";
import FAQ from "./Components/Pages/FAQ";
import Awareness from "./Components/Pages/Awareness";
import Blogs from "./Components/Pages/Blogs";
import Services from "./Components/Pages/Services";
// import Carousel from "./Components/Sections/Carousel";

// import { CircleLoading } from 'react-loadingg';
// const Container = () => <CircleLoading />;
// export default Container;


class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <>
        <Switch>
          <Route path="/" exact>
            {/* <div>
              <Carousel />
            </div> */}
            <div>
              <NavBar />
            </div>
            <div className={styles.container}>
              <img className={styles.image} src={coronaImage} alt="COVID-19 Campaign" />
              <br />
              <text>
                <b>Live Covid19 Tracker - Covid19 Campaign</b>
              </text>
              <br />
              <text>
                <i>(For a Particular country, select a Country from below)</i>
              </text>
              <br />
              <br />
              <CountryPicker handleCountryChange={this.handleCountryChange} />
              <Cards data={data} country={country} />
              {/* <Chart data={data} country={country} /> */}

              {/* <button className="btn btn-success">Nunia</button> */}
            </div>
            <div>
              <Jumbotron />
            </div>
            <div>
              <Features />
            </div>
            <div>
              <Options />
            </div>
            <div>
              <Footer />
            </div>
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/resources" exact>
            <Resources />
          </Route>
          <Route path="/team" exact>
            <Team />
          </Route>
          <Route path="/faq" exact>
            <FAQ />
          </Route>
          <Route path="/awareness" exact>
            <Awareness />
          </Route>
          <Route path="/blogs" exact>
            <Blogs />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;

// import React, { useState, useEffect } from "react";
// import { Cards, CountryPicker, Chart } from "./Components";
// import { fetchData } from "./api/";
// import styles from "./App.module.css";
// import Footer from "./Components/Footer/Footer";
// import image from "./images/image.png";

// const App = () => {
//   const [data, setData] = useState({});
//   const [country, setCountry] = useState();

//   const handleCountryChange = async (country) => {
//     const data = await fetchData(country);
//     setCountry(country);
//     setData(data);
//   };

//   useEffect(() => {
//     async function loadData() {
//       const data = await fetchData();
//       setData({ data });
//     }
//     loadData();
//   }, []);

//   console.log(data);

//   return (
//     <div className={styles.container}>
//       <img className={styles.image} src={image} alt="COVID-19" />
//       <br />
//       <text>
//         <b>Global and Country Wise Cases of Corona Virus</b>
//       </text>
//       <br />
//       <text>
//         <i>(For a Particlar select a Country from below)</i>
//       </text>
//       <br />
//       <br />
//       <Cards data={data} country={country} />
//       <CountryPicker handleCountryChange={handleCountryChange} />
//       <Chart data={data} country={country} />
//       <Footer />
//     </div>
//   );
// };

// export default App;
