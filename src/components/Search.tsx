import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

interface SearchProps {
  setSearchTerm: (value: string) => void;
  setSearchCategory: (value: string) => void;
  searchCategory: string;
}

export default function Search({
  setSearchTerm,
  setSearchCategory,
  searchCategory,
}: SearchProps) {
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
        <Dropdown
          onSelect={(value: any) => {
            setSearchCategory(value);
          }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Search category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {['pokemon', 'move', 'ability', 'location'].map((value, key) => (
              <Dropdown.Item
                eventKey={value}
                key={key}
                active={searchCategory === value}>
                {value}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
