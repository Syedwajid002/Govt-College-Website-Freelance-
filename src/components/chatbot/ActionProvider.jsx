import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const HandleAdministrationProcess = () =>{

    const tmp = `The documents should be submitted during admission process is 1) SSC Memos (original and 2 copies) 2) Inter memo (original and 2 copies) 3) 16 photos of student 4) 4 photos of Parents 5) MJP exam results xerox`

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));

  }

  const HandlePlacement = () =>{

    const tmp = "Placement Drive :  1.Cognizant 2.TCS 3.Unistring Tech sol 4. Google 5. Yashoda Hospitals 6. Rainbow hospitals etc"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));

  }
  const HandleSports = () =>{

    const tmp = "Sports in MJP : 1)Koko 2)Kabadi 3)Volley ball 4)Karate 5)Cricket 6)Football 7)Athletics 8)High jump"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));

  }
  const HandleCourses = () =>{

    const tmp = "type of Course are available : 1)BA(HEP & HPML) 2)B.com(General,Computers,Business analytics) 3)Bsc(BZC,BCC,MPC,MPCS,MSCS,MSDS)"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));

  }
  const HandleTimings = () =>{

    const tmp = "Timings are : 9:30 Am to 4:30 Pm"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));

  }
  const HandleParentsMeet = () =>{

    const tmp = "Every month on the 2nd Saturday."

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));

  }

  const HandlePhones = () =>{

    const tmp = "Phones are not allowed But computer lab access is given to the students"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const HandleNSS = () =>{

    const tmp = "Yes, NSS is available in college"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const HandleNCC = () =>{

    const tmp = "No NCC, only NSS is available in college"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const HandleLibrary = () =>{

    const tmp = "yes, Every student can use the library"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const HandleCultural = () =>{

    const tmp = "link"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const HandleScholarShip = () =>{

    const tmp = " Every student gets 140/- per monthly."

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const HandleEvents = () =>{

    const tmp = "Yes"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const HandleTech = () =>{

    const tmp = "Non-tech and tech job placement drive available"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));

  }

  const HandleIncharge = () =>{

    const tmp = "Incharge madam is available 24 hrs"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const HandleGym = () =>{
    const tmp = "yes, every student have access "+
    "Timings : 5 am to 6 am (morning)"+
    "5 pm to 6 pm (evening)"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const HandleFood = () =>{
    const tmp = " Yes, On bases of college mess time table"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const HandleMedium = () =>{
    const tmp = "Mjp college is English medium"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const HandleAffiliated = () =>{

    const tmp = "Mjp college is Affiliated under Osmania University"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const HandleDressCode = () =>{
    const tmp = "Yes , Mjp college Dress code is blue uniform, White uniform(only on Saturday)"

    const message = createChatBotMessage(tmp);

    setState((prev)=>({...prev,messages:[...prev.messages,message]}));
  }

  const handleInvalid = () =>{

    const message = createChatBotMessage("Sorry i can't get you .");
    
    setState((prev)=>({...prev,message:[...prev.messages,message]}));
  }


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            HandleAdministrationProcess,
            HandleCourses,
            HandleParentsMeet,
            HandlePlacement,
            HandleSports,
            HandleTimings,
            HandlePhones,
            HandleNSS,
            HandleNCC,
            HandleLibrary,
            HandleCultural,
            HandleScholarShip,
            HandleEvents,
            HandleTech,
            HandleIncharge,
            HandleGym,
            HandleFood,
            HandleMedium,
            HandleAffiliated,
            HandleDressCode,
            handleInvalid
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;