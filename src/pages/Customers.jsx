import React from 'react';
import { useNavigate } from 'react-router-dom'; // tambahkan ini
import data2 from "../data3.json";
import PageHeader from '../components/PageHeader';
import AddButton from '../components/AddButton';

function Customers() {
  const navigate = useNavigate(); // hook navigasi
  const breadcrumb = ['Customers', ' / ', 'Customers List'];

  const handleAddClick = () => {
    navigate('\components\AddCustomers'); // arahkan ke halaman form
  };

  const getLoyaltyColor = (loyaltyLevel) => {
    switch (loyaltyLevel) {
      case 'Gold':
        return 'bg-merah'; 
      case 'Silver':
        return 'bg-biru'; 
      case 'Bronze':
        return 'bg-hijau'; 
      default:
        return ''; 
    }
  };

  return (
    <div className="p-6">
      <PageHeader
        title="Customers"
        breadscrumb={breadcrumb}
        children={
          <AddButton name="add-button" label="Add Customer" onClick={handleAddClick} />
        }
      />
      <div className="max-h-[770px] overflow-auto border rounded-md shadow mt-6">
        <table className="min-w-[900px] w-full table-auto border-collapse">
          <thead className="sticky top-0 z-10 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
            <tr>
              {Object.keys(data2[0]).map((key) => (
                <th
                  key={key}
                  className="border-b border-gray-300 px-5 py-3 text-left uppercase font-semibold tracking-wide text-sm bg-gradient-to-r from-green-600 to-emerald-500">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {data2.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-100">
                {Object.keys(item).map((key, i) => {
                  const value = item[key];
                  const loyaltyColor = key === 'loyalty' ? getLoyaltyColor(value) : '';

                  return (
                    <td
                      key={i}
                      className={`border px-4 py-2 ${loyaltyColor}`}>
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
