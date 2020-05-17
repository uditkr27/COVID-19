import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker './components/CountryPicker/CountryPicker';

import {Cards, Chart, CountryPicker} from './components';
import style from './App.module.css';

class App extends React.Component {
render() {
    return (
        <div className ={style.container}>
        <Cards />
        <CountryPicker />
        <Chart />


        </div>
    )
}

}
 export default App;

