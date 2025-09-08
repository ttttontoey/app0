import React from 'react'
import Router2 from "./router3"

export default function App() {
return <Router2/>
}


// import { useState } from "react";
// import Menu from "./component/Menu";
// import Quiz from "./component/Quiz";
// import Score from "./component/score";
// import { createContext } from "react";

// import './App.css'

// export const DataContext = createContext()

// function App() {
//   const [appState,setAppState] = useState("menu")
//   const [score,setScore] = useState(0) 
//   return(
//     <DataContext.Provider value={{appState,setAppState,score,setScore}}>
//       <div className="App">
//         <h1>Web Development Quiz</h1>
//         {appState === "menu" && <Menu/>}
//         {appState === "quiz" && <Quiz/>}
//         {appState === "score" && <Score/>}
//       </div>
//     </DataContext.Provider>
//   );
// }

// export default App;





















// import'./style.css'
// import { Content, Header, Footer } from './func-components';
// import Calendar from './class-components';
// import Button from './class-components';
// import { Calculator2 } from './calculator';
// import { EventData2 } from './event-data'
// import RefArray from './refs-array'
// import MessageBox from './state-func'

// function App() {
//   // return <Button/>
  
// }

// export default function App() { return <MessageBox/>}

// return(
  // <>
  // <Header/>
  // <p><center> <Calendar/> </center></p>
  // <Content/>
  // <Footer/>
  // </>
  // )
  // return(
  //   <>
  //   <h2>DeveloperThai.com</h2>
  //   <div className='title'>React & React Native</div>
  //   </>
  // ) 
  // <Calculator2/>