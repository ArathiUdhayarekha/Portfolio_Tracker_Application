import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StockTable from './components/StockTable';
import AddEditStockForm from './components/AddEditStockForm';
function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/stocks" element={<StockTable />} />
              <Route path="/add-stock" element={<AddEditStockForm />} />
          </Routes>
      </Router>
  );
}
export default App;