import React from "react";

export const SearchHistory = ({ history }) => {
  return (
    <div className="history">
      Search history:
      <ul className="history-list">
        {history.length !== 0 ? (
          history.slice(history.length - 5, history.length).map((el, i) => (
            <li className="history-item" key={i}>
              {el}
            </li>
          ))
        ) : (
          <div>history empty</div>
        )}
      </ul>
    </div>
  );
};
