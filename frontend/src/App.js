import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AvailablePools from './pages/AvailablePools';
import CreatePool from './pages/CreatePool';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AvailablePools />} />
                <Route path="/create" element={<CreatePool />} />
            </Routes>
        </Router>
    );
}

export default App;