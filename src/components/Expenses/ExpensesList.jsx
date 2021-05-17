import ExpenseItem from './ExpenseItem';

import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses to display.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </ul>
  );
};

export default ExpensesList;
