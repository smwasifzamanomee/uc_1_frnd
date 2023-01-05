import React, { lazy, Suspense } from 'react';
import {Routes, Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from './Shared/Spinner';
import BookTrip from './Pages/BookTrip/BookTrip';
import VacationPlan from './Pages/Home/VacationPlan';
import ValidUser from './Pages/Register/ValidUser';

const Faq = lazy(() => import("./Pages/Home/Faq"))
const AboutUs = lazy(() => import("./Pages/Home/AboutUs"))
const Home = lazy(() => import('./Pages/Home/Main'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Register = lazy(() => import('./Pages/Register/Register'));
const NotFound = lazy(() => import('./Shared/NotFound'));
const Layout = lazy(() => import('./Layout'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="valid-user" element={<ValidUser/>}/>
        <Route path="login" element={<Login/>} />

        <Route path='about-us' element={<AboutUs />}/>
        <Route path='faq' element={<Faq />} />
        <Route path='book-trip' element={<BookTrip />} />
        <Route path='/services' element={<VacationPlan />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>

    </Suspense>
  );
}

export default App;
