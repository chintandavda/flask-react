import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';


const App=()=>{

   useEffect(() => {
        fetch('/recipe/hello')
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);


    const [message, setMessage] = useState('')
    return (
        <div className='container'>
            <h2>this is my code</h2>
            <h1>{message}</h1>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));