import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../Filter/ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  //state
  const [filteredYear, setFilteredYear] = useState("2022");
  //listen to ExpenseFilter changes
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //making a new array that is filtered by year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <Card className="expenses-wrapper">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}
export default Expenses;
