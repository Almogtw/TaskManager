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
  console.log("in Expenses.js!!");
  console.log({ filteredYear });

  return (
    <Card className="expenses-wrapper">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map(expense=><ExpenseItem title={expense.title} amonut={expense.amonut} date = {expense.date}/>)}
    </Card>
  );
}
export default Expenses;
