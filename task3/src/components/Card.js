import React from "react";

const Card = ({ title, body, userName }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p><span>Пользователь: </span>{userName}</p>
        </div>
        <div className="card-body">
          <p><span>Заголовок: </span>{title}</p>
          <p><span>Тело: </span>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
