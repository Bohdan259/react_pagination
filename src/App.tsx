import React, { useState } from 'react';
import './App.css';
import { getNumbers } from './utils';
import { Pagination } from './components/Pagination';

const items = getNumbers(1, 42);

export const App: React.FC = () => {
  const [PerPage, setPerPage] = useState(5);
  const [pageChange, setPageChange] = useState(1);

  const visibleItems = items.filter(
    (item, index) =>
      index < PerPage * pageChange && index >= PerPage * (pageChange - 1),
  );
  const firstItem = visibleItems[0];
  const lastItem = visibleItems[visibleItems.length - 1];

  return (
    <div className="container">
      <h1>Items with Pagination</h1>

      <p className="lead" data-cy="info">
        Page {pageChange} (items {firstItem} - {lastItem} of 42)
      </p>

      <div className="form-group row">
        <div className="col-3 col-sm-2 col-xl-1">
          <select
            data-cy="perPageSelector"
            id="perPageSelector"
            className="form-control"
            value={PerPage}
            onChange={event => {
              setPerPage(Number(event.target.value));
              setPageChange(1);
            }}
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        <label htmlFor="perPageSelector" className="col-form-label col">
          items per page
        </label>
      </div>

      <Pagination
        total={42}
        getPerPage={PerPage}
        currentPage={pageChange}
        onPageChange={page => {
          setPageChange(page);
        }}
      />
      <ul>
        {visibleItems.map(item => (
          <li key={item} data-cy="item">
            Item {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
