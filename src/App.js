import Componete1 from './Componentes/primaryComponet/primary';
import SegundoComponent from './Componentes/SecundComponents/secund';
import TerceiroComponent from './Componentes/ThirdComponent/third';
import './App.css';


function App() {

  return (
    <div className='componetes'>

      <Componete1
        titulo="Primeiro Componente"
        nomes="Jonathan Luis "



      ></Componete1>
      <SegundoComponent></SegundoComponent>
      <TerceiroComponent></TerceiroComponent>


    </div>

  );

}

export default App;
