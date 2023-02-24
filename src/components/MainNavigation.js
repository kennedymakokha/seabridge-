import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeFour from "./home/homeFour";
import NotFound from "./pages/notfound";
import Services from "./services/services";
import ServiceDetails from "./services/servicedetails/Content";
import About from "./about";
import Contact from "./contact/contactus";
import ContactusOption from "./contact/contactusoption";

function MainNavigation() {
  return (
    <Router>
      <Routes>
        {/** Home */}
        <Route path="/" element={<HomeFour />} />
        {/* <Route path="/home-one" exact={true} element={<HomeFour />} /> */}
        {/* <Route path="/home-two" exact={true} element={<HomeTwo />} />
        <Route path="/home-three" exact={true} element={<HomeThree />} />
        <Route path="/home-four" exact={true} element={<HomeFour />} />
        <Route path="/home-five" exact={true} element={<HomeFive />} />
        <Route path="/home-six" exact={true} element={<HomeSix />} /> */}
        {/** Pages */}
        {/* <Route path="/notfound" exact={true} element={<NotFound />} />
        <Route path="/pricing" exact={true} element={<Pricing />} />
        <Route path="/requestquote" exact={true} element={<RequestQuote />} />
        <Route path="/shortcodes" exact={true} element={<ShortCodes />} />
        <Route path="/typography" exact={true} element={<Typography />} /> */}
        {/** About Services Contact */}
        <Route path="/about" exact={true} element={<About />} />
        <Route path="/services" exact={true} element={<Services />} />
        <Route
          path="/servicedetails"
          exact={true}
          element={<ServiceDetails />}
        />
        <Route path="/contact" exact={true} element={<Contact />} />
        <Route
          path="/contactusoption"
          exact={true}
          element={<ContactusOption />}
        />
        {/** Blog */}
        {/* <Route path="/bloggrid" exact={true} element={<BlogGrid />} />
        <Route path="/bloglist" exact={true} element={<BlogList />} />
        <Route path="/blogsingle" exact={true} element={<BlogSingle />} />
        <Route path="/blogstandard" exact={true} element={<BlogStandard />} /> */}
        {/** Projects */}
        {/* <Route path="/projectgrid" exact={true} element={<ProjectGrid />} />
        <Route
          path="/projectmasonary"
          exact={true}
          element={<ProjectMasonary />}
        /> */}
        {/* <Route path="/projectsingle" exact={true} element={<ProjectSingle />} /> */}
        {/** invalid routes redirection */}
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default MainNavigation;
