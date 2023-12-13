import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import './App.css';
// import NotesListPage from "./pages/NotesListPage";
// import NotePage from "./pages/NotePage";
import LogIn from "./pages/LogIn";



function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' exact element={<LogIn />} />
          </Routes>
      </ Router>
  );
}

export default App;
