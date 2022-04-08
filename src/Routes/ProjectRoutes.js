import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Project/Projects";

const ProjectRoutes = () => {
   return(
       <BrowserRouter >
            <Routes>
                <Route component = { About }  path="batatadoce" />
                <Route element = { <Contact /> } path="portifolio/#/contato" />
                <Route element = { <Projects /> } path="portifolio/#/projetos" />
                <Route element = { <Home /> } path="/portifolio" />
            </Routes>
       </BrowserRouter>
   )
}

export default ProjectRoutes;