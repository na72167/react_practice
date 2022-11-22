import {BrowserRouter, Route} from 'react-router-dom'
import Users from "./pages/Users"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path={'/'} component={Users}></Route>
        <Route path={'/login'} component={Login}></Route>
        <Route path={'/register'} component={Register}></Route>
      </BrowserRouter>
    </div>
  );
}
export default App;

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
