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
  console.log("in Expenses.js!!");
  console.log({ filteredYear });
  console.log({ filteredExpenses });

  return (
    <Card className="expenses-wrapper">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amonut={expense.amonut}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
export default Expenses;
