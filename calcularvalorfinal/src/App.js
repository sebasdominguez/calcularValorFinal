import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [originalValue, setOriginalValue] = useState(0);
  const [monthlyPercentage, setMonthlyPercentage] = useState(0);

  const calculateValue = () => {
    let totalMonths = 0;
    let totalValue = 0;
    if (startDate !== null && endDate !== null) {
      totalMonths =
        endDate.getMonth() -
        startDate.getMonth() +
        12 * (endDate.getFullYear() - startDate.getFullYear());
      totalValue = originalValue * (1 + monthlyPercentage / 100) ** totalMonths;
    }
    return totalValue;
  };

  return (
    <div className='App'>
      <h2>Calcular el valor final</h2>
      <div>
        <label>Seleccione el período de tiempo:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
      <div>
        <label>Valor original:</label>
        <input
          type='number'
          value={originalValue}
          onChange={(e) => setOriginalValue(e.target.value)}
        />
      </div>
      <div>
        <label>Porcentaje mensual:</label>
        <input
          type='number'
          value={monthlyPercentage}
          onChange={(e) => setMonthlyPercentage(e.target.value)}
        />
      </div>
      <div>
        <label>Valor final:</label> {calculateValue()}
      </div>
    </div>
  );
}

export default App;
