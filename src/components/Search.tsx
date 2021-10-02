import { useState } from 'react';

export default function Search({ setSearchTerm }: any) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    setInputValue('');
  };

  const handleChange = (e: any) => setInputValue(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex align-items-end gap-2">
        <div className="form-group">
          <label className="text-white" htmlFor="search"></label>
          <input
            placeholder="search"
            name="search"
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
