import React from 'react';

function ApiFetch({value, handlePageChange, handleSubmit,data}) {
  return (
    <>
    <input type='text'
    placeholder='Enter id'
    value={value}
    onChange={handlePageChange}
    />
    <button onClick={handleSubmit}>Submit</button>
    {data && <div>{data?.title}</div>}
    </>
    
    
  );
}

export default ApiFetch;
