import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Portfolio from './routes/Portfolio';
import Contact from './routes/Contact';
import Skills from './routes/Skills';
import Error from './routes/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index exact element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/services' element={<Services />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
