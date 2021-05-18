import { useState } from 'react';

import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const onFilterYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter onFilterYear={onFilterYear} selectedYear={filteredYear} />
      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
