import React from 'react';
import data2 from '../data2.json';
import PageHeader from '../components/PageHeader';
import AddButton from '../components/AddButton';

function Orders() {
  const breadcrumb = ['Orders', ' / ', 'Orders List'];

  // Fungsi memberi warna teks pada status
  const getStatusTextColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'text-yellow-600 font-semibold';
      case 'completed':
        return 'text-green-600 font-semibold';
      case 'cancelled':
        return 'text-red-600 font-semibold';
      case 'in progress':
        return 'text-blue-600 font-semibold';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className="p-6">
      <PageHeader
        title="Orders"
        breadscrumb={breadcrumb}
        children={<AddButton name="add-button" label="Add Button" />}
      />

      <div className="border rounded-md shadow mt-6 overflow-auto max-h-[770px]">
        <table className="min-w-[800px] w-full table-fixed border-collapse">
          <thead className="sticky top-0 z-10 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
            <tr>
              {Object.keys(data2[0]).map((key) => (
                <th
                  key={key}
                  className="border border-black px-5 py-3 text-left uppercase font-semibold text-sm">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {data2.map((item, idx) => (
              <tr key={idx} className="hover:bg-hijau transition duration-100">
                {Object.entries(item).map(([key, value], i) => {
                  const isStatusColumn = key.toLowerCase() === 'status';
                  const textColor = isStatusColumn ? getStatusTextColor(value) : '';

                  return (
                    <td
                      key={i}
                      className={`border border-black px-4 py-2 ${textColor}`}>
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

export default Orders;
