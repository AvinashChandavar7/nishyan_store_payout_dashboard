
const Table = () => {
  const tableHeaders = [
    'Order ID',
    'Order date',
    'Order amount',
    'Transaction fees'
  ];

  const tableData = [
    { id: '#281201', date: '7 July, 2023', amount: '$1,278.23', fees: '$22' },
    { id: '#281202', date: '7 July, 2023', amount: '$1,278.23', fees: '$22' },
    { id: '#281203', date: '7 July, 2023', amount: '$1,278.23', fees: '$22' },
    { id: '#281204', date: '7 July, 2023', amount: '$1,278.23', fees: '$22' },
    { id: '#281205', date: '7 July, 2023', amount: '$1,278.23', fees: '$22' },
    { id: '#281206', date: '7 July, 2023', amount: '$1,278.23', fees: '$22' },
    { id: '#281207', date: '7 July, 2023', amount: '$1,278.23', fees: '$22' },
    { id: '#281208', date: '7 July, 2023', amount: '$1,278.23', fees: '$22' },
    { id: '#281209', date: '7 July, 2023', amount: '$1,278.23', fees: '$22' },
    { id: '#281200', date: '7 July, 2023', amount: '$1,278.23', fees: '$22' },

    // Add more data if needed
  ];

  return (
    <table className='w-full h-full  overflow-hidden   '>
      <thead className='w-full'>
        <tr className=' flex w-full flex-row items-center justify-around text-[#4c4c4c] bg-[#F2F2F2] py-2 rounded-md text-center font-semibold'>
          {tableHeaders.map((header, index) => (
            <th key={index} className="w-full text-center">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="">
        {tableData.map((row, index) => (
          <tr key={index} className=' flex w-full flex-row items-center justify-around py-2 text-center  border-b-2 '>
            <td className="w-full text-[#146EB4]">{row.id}</td>
            <td className="w-full  text-center">{row.date}</td>
            <td className="w-full  text-center">{row.amount}</td>
            <td className="w-full  text-center">{row.fees}</td>
          </tr>
        ))}
      </tbody>


      <div className="flex flex-row items-center justify-center gap-4 my-2 ">
        <button className="rounded-md px-4 py-2 border m-1 hover:bg-blue-800 hover:text-white">{"< Previous"}</button>

        <span>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9,].map((number, index) => (
              <button key={index} className="rounded-md px-4 py-2 border m-1 hover:bg-blue-800 hover:text-white" >{number}</button>
            ))
          }
        </span>

        <button className="rounded-md px-4 py-2 border m-1 hover:bg-blue-800 hover:text-white">{"Next >"}</button>
      </div>
    </table>
  );
};

export default Table;

