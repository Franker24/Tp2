import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'




 ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <App></App>
  </React.StrictMode>
 )


// import React from 'react';
// import Home from './Home';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Register from './Login/Register/Register';
// import './App.css';


  // ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode>
  // <BrowserRouter>
  //    <App>
//     <Router>
//       <div>
//         <nav className="navbar">
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/register">Register</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/productos" element={<Productos />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//  </App>
// <BrowserRouter/>
//</React.StrictMode>
//   );
// };
// )

// export default App;
