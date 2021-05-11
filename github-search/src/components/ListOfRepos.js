import React from "react";

export const ListOfRepos = ({ error, repos, isLoading }) => {
  return (
    <div className="repos">
      {isLoading && <div>Loading...</div>}
      {error && (
        <div>
          Unexpected Error Occurred fetching data. Please try again later!
        </div>
      )}
      <ul className="repos-list">
        {repos.map((rep) => {
          return (
            <li key={rep.id} className="repos-card">
              <a
                href={rep.html_url}
                className="card-name"
                target="_blank"
                rel="noreferrer"
              >
                {rep.name}
              </a>
              <p className="card-language">Language: {rep.language}</p>
              <p className="card-description">Description: {rep.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
