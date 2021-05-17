import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm((prevState) => !prevState);
  };

  const savedExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    // hide form
    showFormHandler();
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={savedExpenseDataHandler}
          showFormHandler={showFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
