import { Route,Routes} from 'react-router-dom';
import FixedApp from './FixedApp';
import Article from './Article';
import NotFound from './NotFound';
import Login from './Login';
import Signup from './Signup';
import Create from './Create';
import Logout from './Logout';
import Dispi from './Dispi';

function App() {
  return (
      <Routes>
        <Route path ="/" element={<FixedApp/>}/>
        <Route exact path="/article/:id" element={<Article/>}/>
        <Route path ="/:club" element={<Dispi/>}/>
        <Route path = "/notfound" element ={<NotFound/>}/>
        <Route path = "/Login" element ={<Login/>}/>
        <Route path = "/signup" element ={<Signup/>}/>
        <Route path = "/Create" element ={<Create/>}/>
        <Route path = "/Logout" element ={<Logout/>}/>
      </Routes>
  );
}

export default App;
