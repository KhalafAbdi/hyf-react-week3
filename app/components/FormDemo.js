'use client';

import { useState } from 'react';

function SimpleForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('username:', username, 'password:', password);
    };

    return (
        <div className="form-group">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter username"
                    className="form-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    className="form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn btnPrimary">Submit</button>
            </form>
        </div>
    );
}

export function FormDemo() {
    return (
        <div className="form-demo">
            <h2>Form Input Demo</h2>
            <p>This demonstrates handling form inputs with React state</p>
            <SimpleForm />
        </div>
    );
}
