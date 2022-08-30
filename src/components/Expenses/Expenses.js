import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../Filter/ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
function Expenses(props) {
  //state
  const [filteredYear, setFilteredYear] = useState("2020");
  //listen to ExpenseFilter changes
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //making a new array that is filtered by year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        amount={expense.amount}
        title={expense.title}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className="expenses-wrapper">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
}
export default Expenses;
