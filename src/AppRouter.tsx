// src/AppRouter.tsx — About/Team + RPS hub; legacy brochure paths redirect under /rps
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import HowWeDeliver from './pages/HowWeDeliver';
import Demos from './pages/Demos';
import About from './pages/About';
import Team from './pages/Team';
import RpsOverview from './pages/rps/Overview';
import RpsFeatures from './pages/rps/Features';
import RpsHowItWorks from './pages/rps/HowItWorks';
import RpsUseCases from './pages/rps/UseCases';
import RpsRoadmap from './pages/rps/Roadmap';
import Apis from './pages/Apis';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/services" element={<Services />} />
      <Route path="/how-we-deliver" element={<HowWeDeliver />} />
      <Route path="/demos" element={<Demos />} />
      <Route path="/apis" element={<Apis />} />

      {/* RPS hub + nested */}
      <Route path="/rps" element={<RpsOverview />} />
      <Route path="/rps/features" element={<RpsFeatures />} />
      <Route path="/rps/how-it-works" element={<RpsHowItWorks />} />
      <Route path="/rps/use-cases" element={<RpsUseCases />} />
      <Route path="/rps/roadmap" element={<RpsRoadmap />} />

      {/* Legacy brochure paths → RPS nested homes */}
      <Route path="/features" element={<Navigate to="/rps/features" replace />} />
      <Route path="/use-cases" element={<Navigate to="/rps/use-cases" replace />} />
      <Route path="/how-it-works" element={<Navigate to="/rps/how-it-works" replace />} />
      <Route path="/roadmap" element={<Navigate to="/rps/roadmap" replace />} />
    </Routes>
  );
}
