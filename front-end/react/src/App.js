import './App.css';

import AppBar from './form/appbar';
import Formulario from './form/formulario';
import Logo from './form/logo';
import Login from './login/login';
import CadastroPontos from './componentes/cadastrarPontos/CadastroPontos';

function App() {
  return (
    <div className='App'>
      
      <Logo/>
      <Login/>
      <CadastrarPontos/>    

    </div>
  );
}



export default App;

