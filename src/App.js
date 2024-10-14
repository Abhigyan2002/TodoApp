import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import TaskCards from './Components/TaskCards';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CompletedPage from './Components/CompletedPage';


function App() {
  const [data, setData] = useState([]); // State to store tasks
  const [alert, setAlert]=useState({show:false,type:'',title:''});
  const [completed,setCompleted]=useState([]);

  const showAlert=(type,title)=>{
    setAlert({ show: true, type, title });
    console.log(completed);
        setTimeout(() => {
            setAlert({ show: false, type: '', title: '' }); // Hide alert after 3 seconds
        }, 1000);
  }

  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
        <>
        
      <Form data={data} setData={setData} />
      <div className="container">
        <h4>Upcoming tasks</h4>
        {data.length===0 && <p>No tasks yet. All set for now!</p>}
      {alert.show && <Alert type={alert.type} title={alert.title}/>}
      
        {data.map((task, index) => (
          <TaskCards key={index} title={task.title} setData={setData} data={data} showAlert={showAlert} completed={completed} setCompleted={setCompleted}/> 
        ))}
        
      </div>
      </>
        }>
      </Route>
      
        <Route path='/completed' element={<CompletedPage completed={completed} setCompleted={setCompleted}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
