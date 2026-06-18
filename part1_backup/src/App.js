
import './App.css';
import Mensajes from './Mensaje';

const Desciption = () => {
   return <p>
    Esta es la app del curso de FullStack
   </p>
}

const App = () => {
  return (

    <div className="App">
      <Mensajes color= 'red' message = 'Estamos trabajando '/>
      <Mensajes color='green' message = 'En un curso  '/>
      <Mensajes color='blue' message = 'De react'/>

      <Desciption/>
    </div>
  );
}

export default App;
