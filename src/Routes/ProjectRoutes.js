import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Project/Projects";

const ProjectRoutes = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element = { <About/> }  path="/sobre" />
                <Route element = { <Contact /> }  path="/contato" />
                <Route element = { <Projects /> }  path="/projetos" />
                <Route element = { <Home /> }  path="/" />
            </Routes>
       </BrowserRouter>
   )
}

export default ProjectRoutes;