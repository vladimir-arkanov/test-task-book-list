import React from "react";

export const BookForm = ({ 
  inputName,
  setInputName,
  inputYear,
  setInputYear,
  inputAuthor,
  setInputAuthor,
  submitChange,
  error,
  setError,
  isValid
}) => {
  return (
    <form
      action=""
      method="POST"
      onSubmit={submitChange}
    >
      <input
        type='text'
        placeholder='Enter a book name'
        value={inputName}
        required
        onChange={(e) => setInputName(e.target.value)}
      />
      <input
        type='number'
        placeholder="Enter a publish year"
        value={inputYear}
        required
        onChange={(e) => setInputYear(e.target.value)}
      />
      <input
        type='text'
        placeholder="Enter an Author"
        value={inputAuthor}
        required
        onChange={(e) => setInputAuthor(e.target.value)}
      />
      <button type="submit" disabled={!isValid || error}>safe</button>
    </form>
  )
}