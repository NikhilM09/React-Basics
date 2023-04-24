import { useState } from "react";

const TextForm = () => {
    
    const[text, setText] = useState('Enter text here123');
    // console.log(text);

    const handleChange = (event) => {
        // console.log(event);
        setText(event.target.value);
    }

    const toUppercase = () => {
        let name = "";
        setText(name);
    }

    return (
        <div className="container mt-3">
            <h2>Enter your text here</h2>
            {/* <p>Use the .form-control className to style textareas as well:</p> */}
            <form action="/action_page.php">
                <div className="mb-3 mt-3">
                    <label htmlFor="comment">Comments:</label>
                    <textarea className="form-control" rows="5" id="comment" value={text} onChange={handleChange} name="text"></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={toUppercase}>Clear All</button>
            </form>
        </div>
    )
}

export default TextForm;