import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Newsfeed from './Components/News-Feed/Newsfeed';

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Newsfeed></Newsfeed>
    </div>
  );
}

export default App;
