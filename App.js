import React, { useState } from 'react';

function App() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('review');

 const handleSubmit = async () => {
  setLoading(true);
  setResult('');
  try {
    const response = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, mode }),
    });
    const data = await response.json();
    if (response.ok) {
      setResult(data.result);
    } else {
      setResult(`Error: ${data.error || 'Unknown error'}`);
    }
  } catch (err) {
    setResult(`Fetch error: ${err.message}`);
  }
  setLoading(false);
};


  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>Gemini Code Reviewer & Explainer</h1>
      <textarea
        rows={12}
        cols={80}
        value={code}
        onChange={e => setCode(e.target.value)}
        placeholder="Paste your code here..."
        style={{fontSize: '16px', padding: '12px'}}
      />
      <br />
      <select value={mode} onChange={e => setMode(e.target.value)} style={{fontSize: '18px', margin: '10px'}}>
        <option value="review">Review Code</option>
        <option value="explain">Explain Code</option>
        <option value="testcases">Suggest Test Cases</option>
        <option value="optimize">Optimize Code</option>
      </select>
      <button
        onClick={handleSubmit}
        style={{fontSize: '18px', padding: '8px 20px', marginLeft: '10px'}}
        disabled={loading || !code}
      >
        {loading ? 'Processing...' : 'Submit'}
      </button>
      <div style={{marginTop: '40px', maxWidth: '900px', margin: 'auto'}}>
        {result && (
          <div style={{background: '#f4f6f8', padding: '20px', borderRadius: '12px', textAlign: 'left'}}>
            <b>Result:</b>
            <pre>{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;