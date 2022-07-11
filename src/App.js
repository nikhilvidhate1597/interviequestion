import './App.css';
import React, { Component } from 'react';
import StockList from './day5/HighOrder/StockList';
import UserList from './day5/HighOrder/UserList';
import Highorder from './day5/HighOrder/Highorder';

const StocksData = [
  {
      id: 1,
      name: 'TCS'
        
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
];
const UsersData = [
  {
      id: 1,
      name: 'Krunal'
        
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
];

const Stocks = Highorder(
  StockList,
  StocksData
);
const Users =Highorder(
  UserList,
  UsersData
);


class App extends Component {
  
  render() {
    return (
      <div>
        <Users></Users>
      </div>
    )
  }
}

export default App;


// // import Uesref from './day4/Uesref';
// // import Lifecycle from './day4/Lifecycle';
// // import Uesmemo from './day4/Uesmemo';
// // import Lifting1 from './day4/Uplifting/Lifting1';
// // import Uescallback from './day4/Uescallback';
// // import Uespropdrilling from './day4/Uespropdrilling';
// // import Usecontext from './day4/useContext/Usecontext';

// function App() {
//   return (
//     <div className="App">
//       {/* <Uesref/> */}
//       {/* <Lifecycle/> */}
//       {/* <Uesmemo/> */}
//       {/* <Uescallback/> */}
//       {/* <Uespropdrilling/> */}
//       {/* <Lifting1/> */}
//       {/* <Usecontext/> */}
//     </div>
//   );
// }

// export default App;

// import Reducer  from './day3/Reducer';
// import State from './day3/State';
// import Ueseffect from './day3/Ueseffect';
// function App() {
//   return (
//     <div className="App">
//       <Reducer/>
//       <br/>
//       <State/>
//       <br/>
//       <Ueseffect/>
//     </div>
//   );
// }

// export default App;