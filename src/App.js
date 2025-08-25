import React from 'react'
import { userContext } from './context'
import Header2 from './context-header2'
import Content2 from './context-content2'

export default function App(){
  let [user,setUser] = React.useState()
  return(
    <userContext.Provider value={[user,setUser]}>
      <Header2/>
      <Content2/>
    </userContext.Provider>
  )
}





























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