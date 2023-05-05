import { useState } from "react";

const TextForm = () => {
    
    const[text, setText] = useState('Enter text here123');
    // console.log(text);

    const darkMode= {
        backgroundColor:'black',
        color:'white',
        fontSize:'20px'
    }

    const lightMode  = {
        backgroundColor:'white',
        color:'black',
        fontSize:'20px'
    }
    const[mode, setMode] = useState(lightMode);
    console.log("mode",mode);

    const handleChange = (event) => {
        // console.log(event);
        setText(event.target.value);
    }

    const toUppercase = () => {
        let name = "";
        setText(name);
    }

    

    const toggleMode = () => {
        if(mode.backgroundColor=== 'white'){
            setMode(darkMode);
            console.log(darkMode);
        }
        else{
            setMode(lightMode);
            console.log(lightMode);
        }
    }

    return (
        <div className="container mt-3">
            <h2>Enter your text here</h2>
            {/* <p>Use the .form-control className to style textareas as well:</p> */}
            <form action="/action_page.php">
                <div className="mb-3 mt-3">
                    <label htmlFor="comment">Comments:</label>
                    <textarea className="form-control" rows="5" id="comment" value={text} onChange={handleChange} name="text" style={mode}></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={toUppercase}>Clear All</button>
                <button type="button" className="btn btn-primary mx-3" onClick={toggleMode}>Mode</button>
            </form>
        </div>
    )
}

export default TextForm;