// import { BrowserRouter, Form } from "react-router-dom";
// import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

// const App = () => {
//   return(
//   <BrowserRouter>
//     <div className="relative z-0 bg-primary">
//       <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//         <Navbar />
//         <Hero />
//       </div>
//       <About />
//       <Experience />
//       <Tech />
//       <Works />
//       <div className="relative z-0">
//         <Contact />
//         <StarsCanvas />
//       </div>
//     </div>
//   </BrowserRouter>
//   )
// }

// export default App;

// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Added Routes, Route
import { useEffect } from 'react'; // Added useEffect for the redirect component
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

// --- Helper Component for External Redirects ---
// eslint-disable-next-line react/prop-types
const ExternalRedirect = ({ to }) => {
  useEffect(() => {
    if (to) {
      window.location.href = to;
    }
  }, [to]);

  // You can return a loading message, or null if you don't want to show anything
  return <p>Redirecting...</p>;
};
// --- End Helper Component ---

const App = () => {
  return (
    <BrowserRouter>
      <Routes> {/* Wrap all route definitions in Routes */}
        {/* --- Redirect Routes --- */}
        {/* These should come first so they are matched before the main app layout */}
        <Route
          path="/github.com/muhammedjemal"
          element={<ExternalRedirect to="https://github.com/muhammedjemal" />}
        />
        <Route
          path="/leetcode.com/jemsa12/*" // The asterisk handles optional trailing slash
          element={<ExternalRedirect to="https://leetcode.com/jemsa12/" />}
        />
        <Route
          path="/linkedin.com/in/jemal-muhammed-2896a433b/*" // The asterisk handles optional trailing slash
          element={<ExternalRedirect to="https://linkedin.com/in/jemal-muhammed-2896a433b/" />}
        />

        {/* --- Main Application Layout Route --- */}
        {/* This route will render your main app content for all other paths */}
        <Route path="/*" element={
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;