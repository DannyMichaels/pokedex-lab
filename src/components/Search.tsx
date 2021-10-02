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
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input
        placeholder="search"
        name="search"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
