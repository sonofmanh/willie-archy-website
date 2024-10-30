import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Sharedlayouts = lazy(() => import('./components/sharedlayouts/Sharedlayouts'))
const Homepage = lazy(() => import('./components/Home/Homepage'))
const Errorpage = lazy(() => import('./components/Error/Errorpage'))
const About = lazy(() => import('./components/About/About'))
const Service = lazy(() => import('./components/Services/Service'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'))
const Sharedservice = lazy(() => import('./components/Sharedservice/Sharedservice'))
const Sharedportfolio = lazy(() => import('./components/Sharedportfolio/Sharedportfolio'))
const Architecture_design = lazy(() => import('./components/Architecture_design/Architecture_design'))
const Planning_application = lazy(() => import('./components/Planning_application/Planning_application'))
const Interio = lazy(() => import('./components/Interio/Interio'))
const Create_construction = lazy(() => import('./components/create_construction/Create_construction'))
const Arch_resident = lazy(() => import('./components/arc_residential/Arch_resident'))
const Arc_commercial = lazy(() => import('./components/arc_commercial/Arc_commercial'))


const App = () => {
  return (
    <BrowserRouter className='App'>
      <Suspense fallback=<h1>Eilliw_Architectures</h1>>
        <Routes>
          <Route path='/' element={<Sharedlayouts />}>
            <Route index element={<Homepage />} />

            <Route path='Service'  element={<Sharedservice />}>
              <Route index element={<Service />} />
              <Route path='Architectural_design' element={<Architecture_design />} />
              <Route path='Architectural_design/resident' element={<Arch_resident />} />
              <Route path='Architectural_design/Arc_commercial' element={<Arc_commercial />} />
              <Route path='createandconstruct' element={<Create_construction />} />
              <Route path='interio' element={<Interio />} />
              <Route path='planning_application' element={<Planning_application />} />
            </Route>

            <Route path='portfolio' element={<Sharedportfolio />}>
              <Route index element={<Portfolio />} />
            </Route>

            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<Errorpage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App