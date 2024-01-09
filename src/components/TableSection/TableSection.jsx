import Table from "./Table";

const TableSection = () => {
  return (
    <div className='h-auto w-full  overflow-auto bg-white p-3 rounded-md shadow-lg'>

      <div className='my-4 flex justify-between'>
        <div className="flex flex-row gap-4 border items-center  rounded-md px-2  ">
          <img src="/assets/search.svg" alt="question" className="w-5 h-5  " />

          <input type="search" name="search" placeholder="Search by Order ID..." className="bg-transparent text-black py-2 px-3 w-full outline-none" />
        </div>

        <div className='flex  gap-2 '>
          <button className='border py-1 px-4 rounded-md flex items-center gap-2'>
            Sort
            <img src="/assets/sort.svg" alt="question" className="w-6 h-6  " />

          </button>
          <button className='border py-1 px-4 rounded-md '>
            <img src="/assets/download.svg" alt="question" className="w-5 h-5  " />
          </button>
        </div>
      </div>

      <Table />

    </div >
  )
}

export default TableSection;