import "./App.css";
const Mensaje=(params)=>{
  return <h1>{params.message}</h1>
}
const Description= ()=>{
  return <p>Esta es una App Full stack</p>
}
function App() {
  return <div className="App">
   <Mensaje message='Estamos trabajando'/>
   <Mensaje message='en un curso'/>
   <Mensaje message='de react'/>
   <Description />
  </div>;
}

export default App;
