import {useState} from "react";
//import './App.css';

function App(){
	
	const [name,setName]=useState('');
	const [submit,setSubmit]=useState(false)
	const [error,setError]=useState(false)
	
	const mname=/^[A-Za-z\s]+$/;
	
	const shoot = () => {
		if(name ===''){
		setError('enter valid details');
		setSubmit(false);
		}
		else if (!mname.test(name)){
			setError('name can only lattes')
			setSubmit(false);
		}
		else{
			setError(false);
			setSubmit(true);
		}
		
		
						
	};
	
	const handlename = (e) =>{
		setName(e.target.value);
	}
	
	
	
	return(
		<div>
		<center>
		{error && (
			<div style={{color:'red'}}>
			{error}
			</div>
		)}
		
		{submit && (
			<div style={{color:'green'}}>Successfull</div>
		)
			
		}
		<h1>registraion</h1>
		name:<input type="text" onChange={handlename} value={name}/><br />
		<button onClick={shoot}>submit</button><br />
		</center>
		
		</div>
	)
}




























export default App;