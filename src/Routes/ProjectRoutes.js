import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Project/Projects";

const ProjectRoutes = () => {
   return(
       <HashRouter basename="/">
            <Routes>
                <Route component = { <About/> }  path="/sobre" />
                <Route component = { <Contact /> }  path="/contato" />
                <Route component = { <Projects /> }  path="/projetos" />
                <Route component = { <Home /> }  path="/" />
            </Routes>
       </HashRouter>
   )
}

export default ProjectRoutes;