import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './components/Landing';
import { Login } from './components/Login';
import { Search } from './components/Search';
import { Profile } from './components/Profile';
import { Itinerary } from './components/Itinerary';
import { Planner } from './components/Planner';
import { VeoGenerator } from './components/VeoGenerator';
import { NavigationAI } from './components/NavigationAI';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/veo" element={<VeoGenerator />} />
        <Route path="/navigation-ai" element={<NavigationAI />} />
      </Routes>
    </Router>
  );
}
