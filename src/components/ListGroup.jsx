import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({
  dark,
  transactions,
  removeTransaction,
  editTransaction,
}) => {
  if (transactions.length === 0) {
    return <h3 className="text-center my-2">No Transactions Yet</h3>;
  }

  return (
    <>
      <h3>All Transactions : </h3>
      <ul className="list-group my-2">
        {transactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            dark={dark}
            transaction={transaction}
            removeTransaction={removeTransaction}
            editTransaction={editTransaction}
          />
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
