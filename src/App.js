import React from 'react';

import BookList from './BookList';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default App;
