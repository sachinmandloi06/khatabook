import React from "react";

const ListItem = ({
  dark,
  transaction,
  removeTransaction,
  editTransaction,
}) => {
  return (
    <li
      className={
        dark ? "list-group-item bg-dark text-light" : "list-group-item"
      }
    >
      <span className={transaction.amount < 0 ? "text-danger" : "text-success"}>
        <h4>{transaction.text}</h4>
        <h3>{transaction.amount}</h3>
      </span>
      <span className="float-end">
        <button
          className="btn btn-warning btn-sm mx-2"
          onClick={() => editTransaction(transaction)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => removeTransaction(transaction.id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
