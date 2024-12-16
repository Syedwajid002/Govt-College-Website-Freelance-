import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if(message.toLowerCase().includes("admission") || message.toLowerCase().includes("admissions")){
      actions.HandleAdministrationProcess();
    }else if(message.toLowerCase().includes("placement") || message.toLowerCase().includes("placements")){
      actions.HandlePlacement();
    }else if(message.toLowerCase().includes("sport") || message.toLowerCase().includes("sports")){
      actions.HandleSports();
    }else if(message.toLowerCase().includes("phone") || message.toLowerCase().includes("phones")){
      actions.HandleSports();
    }else if(message.toLowerCase().includes("nss") || message.toLowerCase().includes("nss")){
      actions.HandleNSS();
    }else if(message.toLowerCase().includes("ncc") || message.toLowerCase().includes("ncc")){
      actions.HandleNCC();
    }else if(message.toLowerCase().includes("library") || message.toLowerCase().includes("library")){
      actions.HandleLibrary();
    }else if(message.toLowerCase().includes("course") || message.toLowerCase().includes("courses")){
      actions.HandleCourses();
    }else if(message.toLowerCase().includes("cultural") || message.toLowerCase().includes("activities")){
      actions.HandleCultural();
    }else if(message.toLowerCase().includes("scholarship") || message.toLowerCase().includes("scholarships")){
      actions.HandleScholarShip();
    }else if(message.toLowerCase().includes("events") || message.toLowerCase().includes("event")){
      actions.HandleEvents();
    }else if(message.toLowerCase().includes("timings") || message.toLowerCase().includes("timing")){
      actions.HandleTimings();
    }else if(message.toLowerCase().includes("tech") || message.toLowerCase().includes("non tech") || message.toLowerCase().includes("non-tech")){
      actions.HandleTech();
    }else if(message.toLowerCase().includes("incharge") || message.toLowerCase().includes("madam")){
      actions.HandleIncharge();
    }else if(message.toLowerCase().includes("fitness") || message.toLowerCase().includes("gym")){
      actions.HandleGym();
    }else if(message.toLowerCase().includes("parents") || message.toLowerCase().includes("meet")){
      actions.HandleParentsMeet();
    }else if(message.toLowerCase().includes("food") || message.toLowerCase().includes("nutritious")){
      actions.HandleFood();
    }else if(message.toLowerCase().includes("medium") || message.toLowerCase().includes("medium")){
      actions.HandleMedium();
    }else if(message.toLowerCase().includes("affiliated") || message.toLowerCase().includes("university")){
      actions.HandleAffiliated();
    }else if(message.toLowerCase().includes("dress") || message.toLowerCase().includes("code")){
      actions.HandleDressCode();
    }else{
      actions.handleInvalid();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;