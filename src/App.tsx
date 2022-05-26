import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';
import './App.css';
import CommitsList from './components/CommitsList';


function App() {
  const [commitData, setCommitData] = useState({})

  useEffect(() => {

    const octokit = new Octokit({
      auth: process.env.REACT_APP_PAT_GITHUB
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
    <div className="App p-5 text-center">
      <h3>Repo Master Commits For: </h3>
      <h1>Crossroads Take Home Test</h1>
      <p className="pb-3">(in order from latest to earliest)</p>
      <CommitsList commits={commitData} />
    </div>
  );
}

export default App;
