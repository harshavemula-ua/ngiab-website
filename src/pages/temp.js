// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [gageId, setGageId] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setResult(null);

        try {
            const response = await axios.post('http://127.0.0.1:5000/run_ngiab', {
                gage_id: gageId,
                start_date: startDate,
                end_date: endDate,
            });
            setResult(response.data);
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>NGIAB Data Preprocess</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Gage ID:</label>
                    <input
                        type="text"
                        value={gageId}
                        onChange={(e) => setGageId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Run NGIAB</button>
            </form>

            {result && (
                <div>
                    <h2>Result:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}

            {error && (
                <div style={{ color: 'red' }}>
                    <h2>Error:</h2>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
}

export default App;