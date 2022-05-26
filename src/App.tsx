import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';
import './App.css';
import CommitsList from './components/CommitsList';

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
      <CommitsList commits={commitData} />
    </div>
  );
}

export default App;
