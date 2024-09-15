import React from 'react'

export default function HorizantalCard({ nobtn = false, description = "", title = "", time = "", btn1 = "", btn2 = "", skills = [], onClickBtn2 = "", service = "" }) {



  const formattedTime = new Date(`${time}`).toLocaleDateString('en-US', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <div class=" flex justify-center items-center">
      <div class="w-full   flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        <div className='flex justify-between' style={{ background: "#22ad9a", color: "white" }}>

          <div class=" text-white text-lg px-6 py-4" >{title}</div>
          <div class=" text-white text-lg px-6 py-4">{service}</div>
        </div>

        <div class="flex justify-between px-6 py-4">
          {skills.length ? <div class="flex flex-wrap gap-2">

            {skills?.map((elem, i) => <div key={i} style={{ background: "#22ad9a30", color: "#146b5e" }} class=" text-xs uppercase px-2 py-1 rounded-full border  font-bold">{elem}</div>)}
          </div>:""}
          <div class="text-sm ">{formattedTime}</div>
        </div>

        <div class="px-6 py-4 border-t border-gray-200">
          <div class="border rounded-lg p-4 text-blue " style={{ background: "#00016810" }}>
            {description}
          </div>
        </div>

        <div class=" px-6 py-4" >
          {/* <div class="uppercase text-xs font-bold">Employee</div> */}

          {!nobtn && <div class="flex items-center pt-3">
            <button type="button" class="text-white bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-2 " >{btn1}</button>
            <button type="button" class="text-white bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-2" onClick={onClickBtn2} >{btn2}</button>
          </div>}
        </div>
      </div>
    </div>
  )
}
