import { Route, Routes } from "react-router";
import AboutUs from "./Screens/AboutUs";
import HomeScreen from "./Screens/HomeScreen";
import ContactUs from "./Screens/ContactUs";

import NotFound from "./Screens/NotFound";
import MoviesPage from "./Screens/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/movies" element={<MoviesPage />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
