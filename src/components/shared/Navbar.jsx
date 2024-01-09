
const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full border-b-2 border-[#EFEFEF] shadow-sm p-3">
      <div className="flex flex-row  gap-4 flex-1">
        <h1 className="font-semibold">Payouts</h1>

        <span className="flex items-center  gap-1">
          <img src="/assets/question.svg" alt="question" className="w-3 h-3" />
          <p className="text-gray-400 text-sm">How it works</p>
        </span>
      </div>


      <div className="flex flex-row gap-2 bg-[#F2F2F2] items-center flex-1  rounded-md px-2 ">
        <img src="/assets/search.svg" alt="question" className="w-5 h-5  " />

        <input type="search" name="search" placeholder="Search feature, tutorials, etc." className="bg-transparent text-black py-2 px-3 w-full outline-none" />
      </div>


      <div className="flex flex-row flex-1 gap-1 justify-end">
        <img src="/assets/message.svg" alt="message" title="Message" className="w-10 h-10 bg-[#F2F2F2] p-2 rounded-full" />
        <img src="/assets/dark-arrow.svg" alt="dark-arrow" title="Drop Menu" className="w-10 h-10 bg-[#F2F2F2] p-2 rounded-full" />
      </div>
    </div>
  )
}

export default Navbar