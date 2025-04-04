 
import React from 'react'
 
const SkillsCard = ({title,image,percent}) => {
  return (
    <div className='p-6 rounded-lg border-l-[1px]  mb-6 border-yellow-500   hover:shadow-[0px_10px_4px_0px_rgba(255,255,255,0.1)]   shadow-[6px_6px_6px_6px_rgba(255,255,255,0.1)] hover:bg-[#212428] transform   ease-in-out md:hover:translate-x-2 hover:translate-y-2 duration-300 transition-all cursor-pointer text-center   bg-[#212428]'>
        <img src={`${image}`} alt={title} width={80} height={80} className='object-cover mx-auto'/>
        <h1 className='text-[18px] mt-[1rem] text-white font-[600] ' >{title}</h1>
        <div className="bg-black mt-[1rem] rounded-lg p-2 text-white opacity-40">{percent}</div>
    </div>
  )
}

export default SkillsCard
