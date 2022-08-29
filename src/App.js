import react, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const intialExpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 295,
    date: new Date(2021, 2, 28),
  },
  { id: "e2", title: "BBB", amount: 60, date: new Date(2021, 2, 28) },
  { id: "e3", title: "AC", amount: 40, date: new Date(2021, 2, 28) },
];

function App() {
  const [expenses, setExpenses] = useState(intialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
    console.log("in APP.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
