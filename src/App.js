import Navbar from "./Components/navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import Mainpage from "./Components/Mainpage";
import mainrecipepage from "./Components/Recipe/mainrecipepage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Mainpage}/>
      <Route exact path="/recipe" component={mainrecipepage}/>
    </BrowserRouter>
    
  );
}

export default App;