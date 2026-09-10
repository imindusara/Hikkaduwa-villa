import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { Amenities } from './pages/Amenities';
import { Location } from './pages/Location';
import { ThingsToDo } from './pages/ThingsToDo';
import { Gallery } from './pages/Gallery';
import { Policies } from './pages/Policies';
import { Reviews } from './pages/Reviews';
import { Contact } from './pages/Contact';

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="amenities" element={<Amenities />} />
        <Route path="location" element={<Location />} />
        <Route path="things-to-do" element={<ThingsToDo />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="policies" element={<Policies />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
