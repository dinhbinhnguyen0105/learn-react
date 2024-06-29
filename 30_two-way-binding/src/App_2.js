import { useState } from "react";

function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = () => {
        console.log({
            name, email
        });
    }

    return (
        <div className="App">
            <input value={name} onChange={(e) => {
                setName(e.target.value);
            }} />
            <input value={email} onChange={(e) => {
                setEmail(e.target.value);
            }} />

            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}

export default App;