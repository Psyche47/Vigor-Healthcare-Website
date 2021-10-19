import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./Custom.css";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import AboutUs from "./Pages/About/AboutUs";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/details/:service_id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
          </Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
