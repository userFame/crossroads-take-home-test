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
    
        const date = new Date(key.commit.author.date)
    
        const getDate = date.getDate()
        const getMonth = date.getMonth()
        const getYear = date.getFullYear()

        const getHours = date.getHours()
        const getMinutes = date.getMinutes()
        const getSeconds = date.getSeconds()

        return (
            <div className="commit border m-1 p-3" key={key.sha}>
                <p className="date time">{`${getMonth}/${getDate}/${getYear} at ${getHours}:${getMinutes}`}</p>
                <img src={key.author.avatar_url} className="author-avatar img-thumbnail mb-3" />
                <h3>Commit Message By "{key.author.login}"</h3>
                <p className="text-danger">"{key.commit.message}"</p>
                <h5>SHA: {key.sha}</h5>
                <h6>e-mail: {key.commit.committer.email}</h6>
            </div>
        )
    })

    return commits &&  (
        <div className="commits-list w-50 mx-auto">
            {commitsList}
        </div>
    )
}

