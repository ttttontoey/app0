import react from 'react'
// import'./style.css'
import { Content, Header, Footer } from './func-components';
import Calendar from './class-components';

function App() {
  return(
  <>
  <Header/>
  <p><center> <Calendar/> </center></p>
  <Content/>
  <Footer/>
  </>
  )
  // return(
  //   <>
  //   <h2>DeveloperThai.com</h2>
  //   <div className='title'>React & React Native</div>
  //   </>
  // ) 
}

export default App;
