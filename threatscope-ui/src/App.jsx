import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import ReactMarkdown from 'react-markdown';


function App() {
  const [emailText, setEmailText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const analyzeEmail = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://127.0.0.1:8000/analyze', {
        content: emailText,
      });
      setResult(res.data.result);
    } catch (err) {
      setResult('Error: Could not analyze email.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">ThreatScope AI – Email Analyzer</h1>
      <textarea
        className="w-full max-w-2xl h-48 p-4 text-black rounded resize-none"
        placeholder="Paste suspicious email content here..."
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
      />
      <button
        onClick={analyzeEmail}
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
      {result && (
        <div className="mt-6 bg-gray-800 p-4 rounded max-w-2xl whitespace-pre-wrap">
          <ReactMarkdown>{result}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default App;
