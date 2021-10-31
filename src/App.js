// import Navbar from "./Components/navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Mainpage from "./Components/Mainpage";
import Mainrecipepage from './Components/Recipe/mainrecipepage';
import maindietpage from "./Components/Diet_Plans/maindietpage";
import mainmodelpage from "./Components/Models/mainmodelpage";
import mainuserpage from "./Components/Users/mainuserpage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Navbar /> */}
        <Route exact path="/" component={Mainpage}/>
        <Route exact path="/recipe" component={Mainrecipepage}/>
        <Route exact path="/user" component={mainuserpage}/>
        <Route exact path="/model" component={mainmodelpage}/>
        <Route exact path="/plan" component={maindietpage}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;