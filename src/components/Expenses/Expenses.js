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
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
    </Card>
  );
}
export default Expenses;
