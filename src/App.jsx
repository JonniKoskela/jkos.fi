import "./App.css";
import Headernew from "./headernew";
import ContactPage from "./pages/ContactPage";
import MainPage from "./pages/MainPage";
import ProjectsLandPage from "./pages/ProjectsLandPage";
import InfiniteScrollTest from "./pages/ProjectsPages/InfiniteScrollTest";
/* import ChatApp from "./pages/ProjectsPages/ChatApp.jsx"; */
import MainLandPage from "./pages/MainLandPage";
import WIP from "./pages/WIP";
import C from "./pages/ProjectsPages/C";
import { Route, Routes } from "react-router-dom";
import Preloader from "./Components/Preloader";
import { useEffect } from "react";
import { useState } from "react";

function App() {
      const [loaded, setLoaded] = useState(false);
      useEffect(() => {
            window.addEventListener("load", (event) => setLoaded(true));
            /*             return () => window.removeEventListener("load", handleLoading); */
      }, []);

      return loaded == false ? (
            <Preloader />
      ) : (
            <div className="App">
                  <Headernew />
                  <div id="ContentContainer">
                        <Routes>
                              <Route
                                    path="/contact"
                                    element={<ContactPage />}
                              />
                              <Route
                                    path="/projects"
                                    element={<ProjectsLandPage />}
                              />
                              <Route path="/wip" element={<WIP />} />
                              <Route
                                    path="/"
                                    element={
                                          <>
                                                <MainLandPage /> <MainPage />
                                          </>
                                    }
                              />
                              <Route
                                    path="/projects/infscroll"
                                    element={<InfiniteScrollTest />}
                              />
{/*                               <Route
                                    path="/projects/ChatApp"
                                    element={<ChatApp />}
                              /> */}
                              <Route path="/projects/C" element={<C />} />
                        </Routes>
                  </div>
            </div>
      );
}

export default App;
