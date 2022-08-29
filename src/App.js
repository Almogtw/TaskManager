import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 295,
      date: new Date(2021, 2, 28),
    },
    { id: "e2", title: "BBB", amount: 60, date: new Date(2021, 2, 28) },
    { id: "e3", title: "AC", amount: 40, date: new Date(2021, 2, 28) },
  ];
  const addExpenseHandler = (expense) => {
    console.log("in APP.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
