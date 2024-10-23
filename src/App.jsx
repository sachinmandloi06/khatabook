import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import ListGroup from "./components/ListGroup";

const App = () => {
  const [dark, setDark] = useState(false);

  // change theme
  const changeTheme = () => {
    dark ? setDark(false) : setDark(true);
  };

  const [transactions, setTransactions] = useState([]);

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false,
  });

  // Add Transaction

  const addTransaction = (text, amount) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      text: text,
      amount: parseInt(amount),
    };

    setTransactions([newTransaction, ...transactions]);

    toast.success("Transaction Added");
  };

  // Remove Transaction

  const removeTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );

    toast.error("Transaction Removed!");
  };

  // Edit Transaction
  const editTransaction = (transaction) => {
    setEdit({
            transaction: transaction,
      isEdit: true,
    });
  };

  // Update Transaction
  const updateTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    );

    setEdit({
      transaction: {},
      isEdit: false,
    });

    toast.success("Transaction Updated!");
  };

  return (
    <>
      <Navbar dark={dark} changeTheme={changeTheme} />
      <div
        id="container"
        className={
          dark ? "container-fluid p-5 bg-secondary" : "container-fluid p-5"
        }
      >
        <Form
          dark={dark}
          addTransaction={addTransaction}
          edit={edit}
          updateTransaction={updateTransaction}
        />
        <Dashboard dark={dark} transactions={transactions} />
        <ListGroup
          dark={dark}
          transactions={transactions}
          removeTransaction={removeTransaction}
          editTransaction={editTransaction}
        />
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
