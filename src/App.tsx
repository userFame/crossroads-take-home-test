import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';
import logo from './logo.svg';
import './App.css';

function App() {
  const [commitData, setCommitData] = useState({})

  useEffect(() => {

    const octokit = new Octokit({
      auth: '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'
    })

    const getCommits = async () => {
      try {
        return await octokit.request('GET /repos/{owner}/{repo}/commits', {
          owner: 'userFame',
          repo: 'crossroads-take-home-test'
        })
      } catch (err) {
        throw err
      }
    }

    getCommits().then(res => {setCommitData(res); console.log(res)}).catch(err => console.log(err, 'error'))

  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
