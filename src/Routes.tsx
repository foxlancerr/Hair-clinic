import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/not-found';
import GlobalLayout from './components/layout/GlobalLayout';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
