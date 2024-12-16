import React from 'react'

export const Widget = (props) => {
  return (
    <div className='w-full p-2 flex flex-col justify-evenly items-start gap-1'>
        <div className='p-2 rounded-xl bg-bot text-white text-xs cursor-pointer' onClick={()=>props.actions.HandleAdministrationProcess()}>Regarding Admission process</div>
        <div className='p-2 rounded-xl bg-bot text-white text-xs cursor-pointer' onClick={()=>props.actions.HandlePlacement()}>Regarding Placement drive</div>
        <div className='p-2 rounded-xl bg-bot text-white text-xs cursor-pointer' onClick={()=>props.actions.HandleCourses()}>Regarding courses</div>
        <div className='p-2 rounded-xl bg-bot text-white text-xs cursor-pointer' onClick={()=>props.actions.HandleSports()}>Regarding sports</div>
        <div className='p-2 rounded-xl bg-bot text-white text-xs cursor-pointer' onClick={()=>props.actions.HandleTimings()}>College Timings</div>
        <div className='p-2 rounded-xl bg-bot text-white text-xs cursor-pointer' onClick={()=>props.actions.HandleParentsMeet()}>Regarding Parents meet</div>
    </div>
  )
}
