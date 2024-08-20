import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:4000/api/v1/user/login',
                { username, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            setMessage(response.data.message);
            console.log('Token:', response.data.token);
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.message || 'Login failed');
            } else {
                setMessage('Login failed');
            }
        }
    };

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div style={styles.formGroup}>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                        placeholder="Enter username"
                    />
                </div>
                <div style={styles.formGroup}>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                        placeholder="Enter password"
                    />
                </div>
                <button type="submit" style={styles.button}>Login</button>
            </form>
            {message && <p style={styles.message}>{message}</p>}
        </div>
    );
};

const styles = {
    container: {
        width: '300px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        textAlign: 'center',
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '8px',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
    },
    message: {
        marginTop: '20px',
        color: 'red',
    },
};

export default Login;
