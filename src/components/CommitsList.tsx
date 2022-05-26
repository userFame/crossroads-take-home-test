import React from 'react'
import '../styles/commitsList.css'

type Commits = {
    data?: [];
    headers?: object;
    status?: number;
    url?: string
}

export default function CommitsList({ commits } : { commits : Commits }) {

    const commitsList = commits.data?.map((key : any) => {
        return (
            <div className="commit" key={key.sha}>
                <h3>Commit Message</h3>
                <p>{key.commit.message}</p>
                <h3>Author</h3>
                <p>{key.author.login}</p>
            </div>
        )
    })

    return commits &&  (
        <div className="commits-list">
            {commitsList}
        </div>
    )
}

