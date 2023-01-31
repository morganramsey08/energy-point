import React, { useLayoutEffect } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home/index";
import TeamPage from "./pages/team";
import ConsultingPage from "./pages/consulting";
import ServicesPage from "./pages/services";
import ContactPage from "./pages/contact";
import ThePointPage from "./pages/point";
interface Props {
  children: any;
}

const Wrapper = ({ children }: Props) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route key="home" element={<HomePage />} path="/" />
          <Route key="team" element={<TeamPage />} path="/team" />
          <Route
            key="consulting"
            element={<ConsultingPage />}
            path="/consulting"
          />
          <Route key="services" element={<ServicesPage />} path="/services" />
          <Route key="the-point" element={<ThePointPage />} path="/the-point" />
          <Route key="contact" element={<ContactPage />} path="/contact" />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
