import React, { useEffect, useState } from 'react'
import { db } from './Firebase-config'
import { doc,getDoc } from 'firebase/firestore'
const Eresources = () => {

    const [Links,setLinks]=useState([]);

    const fetchData=async()=>{
        try{
            const docref=doc(db,"E-Resources","2DPOyzScKSFKBcDyKPMm");
            const docsnap= await getDoc(docref);

            if(docsnap.exists()){
                const AllLinks=docsnap.data().Links;
                setLinks(AllLinks);
                // console.log(Links);
            }else{
                console.log("No Such Document")
            }
        }
        catch(e){
            console.log("Error while Fetching data in eresources please check"+e)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
    <div className="mx-auto bg-bg text-white p-5 md:w-1/2 rounded-xl">
        <h1 className="font-bold text-blue-500">E-Resources for students:</h1> 
        <ul className="underline">
            {Links.map((item,index)=>(
                <li key={index}><a href={item}>{item}</a></li>
            ))
          
            }
          </ul>
      </div>
    </>
  )
}

export default Eresources