import Sidebar from './template/sidebar'
import Topbar from './template/topbar'
import './App.css';
import Messageing from './views/pages/messageing'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router >
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
          <Sidebar />
          <div className="flex flex-col float-1 w-full">
            <Topbar />
            <Messageing />
          </div>
        </div>
      </Router>
  );
}

export default App;
