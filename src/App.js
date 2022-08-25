import Expenses from "./components/Expenses";
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
