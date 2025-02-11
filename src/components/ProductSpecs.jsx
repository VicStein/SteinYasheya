import React from 'react';

const ProductSpecs = ({ specs }) => {
  return (
    <div>
      <h2>Technical Specifications</h2>
      <table>
        <tbody>
          {Object.entries(specs).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSpecs;
