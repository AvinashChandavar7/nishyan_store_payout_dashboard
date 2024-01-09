import TableSection from "../../components/TableSection/TableSection"
import Navbar from "../../components/shared/Navbar"

const Payments = () => {
  return (
    <div className="w-full bg-[#FAFAFA] overflow-auto">

      <Navbar />


      <div className="flex justify-between py-6 px-10">
        <h1 className="text-xl font-semibold">
          Overview
        </h1>

        <select name="" id="" className="border border-[#EFEFEF] px-2 rounded-sm text-[#4C4C4C] bg-white">
          <option value="last-month"> Last Month</option>
          <option value="last-year"> Last Year</option>
          <option value="last-week"> Last Week</option>
          <option value="last-days"> Last Days</option>
        </select>
      </div>

      <div className="flex ">
        <div className="bg-white flex-1 ml-8 p-6 rounded-xl shadow-sm">
          <h1>Online orders</h1>
          <h1 className="text-2xl font-semibold">231</h1>
        </div>
        <div className="bg-white flex-1 mx-8 p-6 rounded-xl shadow-sm">
          <h1 className="">Amount received</h1>
          <h1 className="text-2xl font-semibold">$23,92,312.19</h1>
        </div>
      </div>

      {/* <div className="flex mt-2 ">
        <div className="bg-white flex-1 ml-8 p-6 rounded-xl shadow-sm hover:bg-[#146EB4] hover:text-white">
          <span className="flex gap-1 items-center">
            <p>Next Payout</p>
            <img src="/assets/question.svg" alt="question" className="w-3 h-3" />
          </span>
          <h1 className="text-2xl font-semibold">
            ₹92,312.20
          </h1>
          <p><span className="text-[#4D4D4D]">Next payout date</span> Today, 04:00PM</p>

          <h1 className="underline underline-offset-1 text-[#146EB4] hover:text-white">
            View 13 orders
          </h1>
        </div>
      </div> */}


      <div className="m-10">
        <h1 className="text-2xl font-semibold">
          Transactions | This Month
        </h1>

        <div className="w-full mt-4">
          <TableSection />
        </div>

      </div>


    </div>
  )
}

export default Payments