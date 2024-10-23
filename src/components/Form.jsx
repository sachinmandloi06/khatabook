import React, { useEffect, useState } from "react";

const Form = ({ dark, addTransaction, edit, updateTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit
      ? updateTransaction({ id: edit.transaction.id, text, amount: +amount })
      : addTransaction(text, amount);

    setText("");
    setAmount("");
  };

  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  return (
    <div className={dark ? "card p-2 bg-dark" : "card p-2"}>
      <form className="my-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Transaction"
          className="form-control my-2"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          className="form-control my-2"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className={
            dark ? "btn btn-secondary w-100 my-2" : "btn btn-success w-100 my-2"
          }
        >
          Save Transaction
        </button>
      </form>
    </div>
  );
};

export default Form;
