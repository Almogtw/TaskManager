import react, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);



  const onSaveExpenseDataHandler = (enteredExepenseData) => {
    const expenseData = {
      ...enteredExepenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };

  const startEditingHandler = (event) => {
    setisEditing(true);
  };
  const stopEditingHandler = (event) => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}> Add New Expense</button>}
      {isEditing && <ExpenseForm
        onSaveExpenseData={onSaveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />}
      
    </div>
  );
};
export default NewExpense;
