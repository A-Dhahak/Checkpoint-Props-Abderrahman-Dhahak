import logo from './logo.svg';
import './App.css';
import ProfileComponent from './Profile/Profilecomponent';
import Handlename from './Profile/Handlename';
import image from './Photo.jpg';



function App() {
  const styleObject = {color: "blue"}
  const styleObject2 = {color : "#90EE90"}
  return (
    <div className="App" >

     <div style = {styleObject2} > <Handlename /> </div>

     <div style={styleObject}> <ProfileComponent Name="Abderrahman Dhahak" Bio="Bachelor Electronics"Profession="Developer">
        <img className="imgsize" src ={image} alt = 'Photo' />
        </ProfileComponent>
        </div>
    </div>
  );
}

export default App;


