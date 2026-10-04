// // import { useState } from 'react'
// // import Hours from './Hours'
// // import LoggedIn from './LoggedIn'
// // import Role from './Role'
// // import Bg from './Bg'
// // import Text from './Text'
// // import { useState } from 'react'
// // import UseEffect from './UseEffect'
// // import Cards from './Cards'
// // import main from './main.js'
// // import PlayVideo from './PlayVideo';
// import Theme from './Theme';
// import Usecall from './Usecall';
// // import StopWatch from './StopWatch';


// function App() {
// // const [count, setCount] = useState(1)
// // const [smit, setsmit] = useState(main)
// // const [count, setcount] = useState(0);

//   return (
//     <>
//     {/* <h1>Mantasha </h1>
//     <div>Hero</div>
//     <h1 style={{
//       color:'brown',
//       fontSize:'25px'
//     }}>
//          Zartasha
//     </h1>
//     <ul style={{
//       color:'pink'
//     }}>
//       <li>Pakistan</li>
//       <li>China</li>
//       <li>India</li>
//       <li>Brazil</li>
//     </ul> */}

//     {/* COUNTER */}
//     {/* <h1>Counter {count}</h1>
//     <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    
//     <button onClick={()=>{setCount(count-1)}}>Click Me</button> */}


//     {/* CARDS
// <h1>They are the students of SMIT</h1>
//     <Cards name="Zartasha" descpt="She is the Artist" age={19}  />
//     <Cards name="Alisbha" descpt="She is the Web Developer" age={16}  />
//     <Cards name="Hania" descpt="She is the Doctor" age={22}  />
//     <Cards name="Humna" descpt="She is the Entrepreneur" age={24}  /> */}


// {/* <h2>Today we are learning about UseEffect</h2>
// <UseEffect county={count}/>
// <button onClick={()=>{setcount(count+1)}}>Increase</button> */}
    
    

//     {/* <Hours/>
//     <LoggedIn/> <br />
//     <Role/> <br/> */}
//     {/* <Bg/>  <br/> */}
//     {/* <Text/> */}
//     {/* <StopWatch/> */}
//     {/* <PlayVideo/> */}
//     <Theme/>
//     <Usecall/>

    
  

//     </>
//   )
// }

// export default App


import { useState } from 'react'
import Hours from './Hours'
import LoggedIn from './LoggedIn'
import Role from './Role'
import Bg from './Bg'
import Text from './Text'
import UseEffect from './UseEffect'
import Cards from './Cards'
import main from './main.js'
import PlayVideo from './PlayVideo';
import Theme from './Theme';
import Usecall from './Usecall';
import StopWatch from './StopWatch';

function App() {

const [count, setCount] = useState(1)
const [smit, setsmit] = useState(main)
const [count2, setcount2] = useState(0);

  return (
    <>
    
    <h1>Mantasha </h1>
    <div>Hero</div>

    <h1 style={{
      color:'brown',
      fontSize:'25px'
    }}>
         Zartasha
    </h1>

    <ul style={{
      color:'pink'
    }}>
      <li>Pakistan</li>
      <li>China</li>
      <li>India</li>
      <li>Brazil</li>
    </ul>

    <h1>Counter {count}</h1>

    <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    
    <button onClick={()=>{setCount(count-1)}}>Click Me</button>

    <h1>They are the students of SMIT</h1>

    <Cards name="Zartasha" descpt="She is the Artist" age={19}  />
    <Cards name="Alisbha" descpt="She is the Web Developer" age={16}  />
    <Cards name="Hania" descpt="She is the Doctor" age={22}  />
    <Cards name="Humna" descpt="She is the Entrepreneur" age={24}  />

    <h2>Today we are learning about UseEffect</h2>

    <UseEffect county={count2}/>

    <button onClick={()=>{setcount2(count2+1)}}>Increase</button>

    <Hours/>
    <LoggedIn/> <br />
    <Role/> <br/>

    <Bg/>  <br/>

    <Text/>

    <StopWatch/>

    <PlayVideo/>

    <Theme/>

    <Usecall/>
  
    </>
  )
}

export default App