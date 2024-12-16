import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Comp = ({session}) => {
    return (
        <div className='rounded-xl border border-gray-300 p-2 flex flex-col gap-3 mx-auto md:w-1/2 h-80 z-10'>
            <div className='flex flex-row justify-between pr-10'>
                <h1 className='uppercase font-bold'>{session.studentName}</h1>
                <h1 className='text-xs uppercase text-gray-600'>{session.date}</h1>
            </div>
            <p className='uppercase text-xs'>{session.studentGroup}</p>
            <p className='overflow-hidden text-justify'>{session.content}</p>
        </div>
    );
}


const StudentReviews = () => {

    const [sessions, setSessions] = useState([
        {
            date: '09-02-2023',
            studentName: 'A.Deepika',
            studentGroup: 'final B.com(CA)',
            content: `Today's session is very interesting to know about Healthcare Management. It include how to know about new things of human health , and hospital environment, concerned Medical Specialities. Students are very excited to listen to these classes. Previously we didn't know much about hospital but we are knowing very interesting facts by Raghava sir. Thanks for giving us this wonderful opportunity to get  knowledge about hospitals.`,
        },
        {
            date: '09-02-2023',
            studentName: 'K.Shailaja',
            studentGroup: 'final B.com(CA)',
            content: `In today's session we are learn more things about the hospitals what type of signs in the hospital and what it indicates we are learn clearly. Sir was explain and showing signs and we are learn another topics that is patient feeling and emotions how doctors will treat the patient or how patient behaves and his mentality. Sir also showing some videos about the patient emotions. My friends are also very interested to listen these classes. Todays our principal sir also listen our class. He says learn carefully and be attention in the class. Actually we are all waiting for these classes because sir told different things about hospitals. Now we have some awareness about the hospital. It is one of the good opportunity to us. Thank you.`,
        },
        {
            date: '08-02-2023',
            studentName: 'P.Pavani',
            studentGroup: 'final B.com(CA)',
            content: `Today session is very interesting. In this session we learnt what we are? It helps us how we are behaving, how we are maintaining yourself, and how our attitude is. We learnt about our behavior, attitude with others. They conducted an exam us to know our selfless. And I much more interesting to know about how I’m thinking in this session. We enjoy and learnt about health care management in hospitals. We are all understood everything what they are spoken with us. And we learnt how to maintain a team where we are working, how to realize if we are wrong, how to correct our mistake. Finally we enjoyed and interestingly listened this class.`,
        },
        {
            date: '13-02-2023',
            studentName: 'B. SharonRosa',
            studentGroup: 'final B.com(CA)',
            content: `Today's session was very good, we learnt many things in this session. Today I learnt how to maintain teamwork in health care service. We came to know how to make decisions from team work, we enjoyed a lot in today’s session. This session will help in my future. The things that I learnt in this I will apply in my life. I am Improving more communication skills in these classes and we learnt. We are working, how to realize if we are wrong. We enjoyed and listened to this class. It showed me a lot in my life that how to survive in professional life and personal life and I learned ethical values. Daily we are learning about new things. I improved my knowledge. We are fully happy for this opportunity.`,
        },
        {
            date: '11-02-2023',
            studentName: 'SK. Asha',
            studentGroup: 'final B.com(CA)',
            content: `Today's session was very interesting. In this session we learnt so many things. This session continued from 10:30 to 4:30. Full day training session. In this day's session we learnt about medical and non clinical healthcare facilities. Today's session was conducted by Dr.Nagesh sir, from Omini Hospital. Nagesh sir briefly explained in clinical facilities. Nagesh sir was told very interesting topics in this session. Sir very close and friendly to move us. They conducted an exam to know our selflessness. And I much more interesting to know about clinical information. And we participated role play exercise this session. We know new things in this session. I improved my knowledge & skills we are full happy with these session.`,
        },
        {
            date: '11-02-2023',
            studentName: 'SK. Asha',
            studentGroup: 'final B.com(CA)',
            content: `Today’s session I learnt many things that karthik sir has told it about how to deal with a person in a critical situation and how to covey our matter without hurting them and should be very patients and with everyone in organization and it was very marvelous and spatulas session today. Nagesh sir has told how to interact with patients when they are anger and test was conducted by us with clients and non- clients information sir has told much information how to talk with patients and conveying in an anger mood and etc. Thank you for giving this opportunity for us.`,
        },
        {
            date: '15-02-2023',
            studentName: 'B.Nikitha',
            studentGroup: 'final B.com(CA)',
            content: `Today’s session is very interested. The session was conducted by Karthik sir. In this session, sir told about the communication skills and its Importance how to communicate with people and experts. How to convey the message when a person ask about organization. In this we can learnt conversation of patient and executive, manager and executive. We also participate the Role Plays. We all are enjoyed it we can learn so many things. We have awareness about each and everything in the hospitals premises what are use of development and each person. We all are enjoyed the session everyday by learning new things in the hospital.`,
        },
        {
            date: '16-02-2023',
            studentName: 'K. Neelima',
            studentGroup: 'final B.com(CA)',
            content: `Today’s session is very very interested and good. The session was conducted by karthik sir. Today we enjoyed session today and we know how to develop the interpersonal skills at hospital and how to behave with them and how to interact with patients and consultant and with employee and specialist and manager etc. And we learnt how to face a critical situation and how to answer that in a empathic customer and we should not interpret should not ignore item should listen what they are trying to say today we are learning about the people in hospital. What are the different types of the new things in the session. I improved my knowledge and my skills thanks for giving us this wonderful opportunity to getting knowledge about hospital.`,
        },
        {
            date: '17-02-2023',
            studentName: 'M. Rachana',
            studentGroup: 'final B.com(G)',
            content: `Today’s session I gained more knowledge. About the hospital and private, government, charitable hospital and rules & regulations are more interesting topics to us. We all enjoyed today's test. Raghava sir gives more knowledge about the patient and doctor mentality and bill to patients. I learn more skills and activities from this class and management of the hospital. How to control the profits & loss of the hospitals. This is interesting to my BCOM students and learn about how to get the break even point. This is today's session. Thank you sir, we enjoy a lot of hospitals.`,
        },
        {
            date: '21-02-2023',
            studentName: 'B. Sharon Rose',
            studentGroup: 'final B.com(CA)',
            content: `Today’s sessions is very good and also interesting. It gives more knowledge about Interesting it gives more knowledge about billing process in Healthcare and how to follow the rules and regulations such a interesting topics and also we may know how the processing ware running in the hospital. We all are enjoyed today test. Nagesh sir give more knowledge to us. This was the 2nd session of Nagesh sir. WE divided into groups also on that day. We enjoyed the session on that day we are learning new things by every sessions about Hospitals. Thank you sir and providing this type of session to us Thank you.`,
        },
        {
            date: '24-02-2023',
            studentName: 'P. Vaishnavi',
            studentGroup: 'final B.com(CA)',
            content: `Today’s the session was very good which was given a detail information and analysis of the hospital and Today’s topic was about the awareness to us. How the ambulance will take care of every person and how the ambulance was divided for each and every patients for their injuries they occur or any accidents the ambulance were for mostly use of emergency cases. They are so much of information about mortality and fertility we have learnt in today's session.`,
        },
        {
            date: '25-02-2023',
            studentName: 'Ch. Mounika',
            studentGroup: 'final B.com(CA)',
            content: `Today’s session was very interesting it gives more knowledge for facilitated management which was session given by the srinivas sir, was gives a brief awareness to us. The session about managing the physical environment and infrastructure of hospitals today have an two session very interesting. We all are enjoyed to the text. We know having everyone some awareness about the session topics. Thank you sir we enjoyed the session for every day. by learning new things. Thank you sir.`,
        },
        {
            date: '27-02-2023',
            studentName: 'B. Likhitha',
            studentGroup: 'final MPC',
            content: `Today’s session was very interesting and it gives more knowledge about Emotional Intelligence which was session given by Raghava sir. We enjoyed this session and also enjoyed this session. We learnt open mind, close mind, Rational mind/cognitive, Emotional Intelligence, type of Intelligence and Multiple Intelligence. We are more interested to learn more about this types. It is helpful to everyone. It was the great session to me and also for my friends. We all are grateful for this opportunity.`,
        },
        {
            date: '01-03-2023',
            studentName: 'T.Indrani',
            studentGroup: 'final MPC',
            content: `Today's session was very good and interesting. In this session we learnt about emergency services and casualty management given by kumar sir. We learnt key points to keep in mind regarding emergency services and casualty management in hospitals in india. I learnt more about what will happen in healthcare management which i don't know previous. This session not only for hospitals, also useful in our life. We enjoyed a lot in today's session. I am interested to go and work in hospitals from today's session. I got knowledge. I improved my thinking skills. It is useful to everyone. Sir teaching was very nice. Thank you sir for spending your valuable time with us to teach us. I feel this is great opportunity to us. Thank you sir.`,
        },
        {
            date: '02-03-2023',
            studentName: 'B. Sridevi',
            studentGroup: 'final MPC',
            content: `Today's session was very good, which gave a detailed information and analysis of the hospitals and today's topic was about ambulance wealths and mortality. The session given by the sir, was given a brief awareness to us. How the ambulance takes care of each and every patient for their injuries they occur or any accident the ambulance were for mostly use of emergency causes they are so much of information about the deaths and mortality. We learn today how the hospitals will be verify the death of the patient and they will be decided the death certificate for everyone in the hospital and how the mortality will be take step in this we known now and we learn today medical legal case also in this session. It was great session for us we know having everyone some of awareness about today's session topics thank you you're ETHAMES and nagaraju sir, vindya mam, shudhan sir for supporting us with the today's session give by the teja sir thank you.`,
        },
        {
            date: '01-03-2023',
            studentName: 'R.Swathi',
            studentGroup: 'final MPC',
            content: `Today's session was very interesting. I learned so much knowledge in this session about emotional intelligence. This session was given by Mr. Raghava sir. We improved our thinking level in this session. This session was very thoughtful. Raghava sir's way of teaching is very nice with live examples. This session is useful for our daily life. We know for ourselves this session is very thankful for me. I enjoyed this session. Thank you sir.`,
        },
        {
            date: '02-03-2023',
            studentName: 'B.Sridevi',
            studentGroup: 'final MPC',
            content: `Today's session was very understandable and good. We learnt about self management and we got some knowledge about self awareness. We wrote tests for the previous 15 days. It was very exciting to write. We enjoyed it. We remembered all the previous sessions from this test. Raghava sir took a class of emotional intelligence, the second session we learn about how to face emotional situations. We felt happy for this session. We learnt so many things about emotional intelligence before which we don't know we learnt about new skills from their session. Raghava sir teaching was very beautiful and understandable thank you sir.`,
        },
        {
            date: '03-03-2023',
            studentName: 'K.Priyanka',
            studentGroup: 'final MPC',
            content: `Today's session was very very nice and so interesting. We really learned something in this session. We learnt about social awareness. We got some knowledge in this session. It is useful to everyone the session not only about hospitals but also about life. The session was so interesting. We enjoyed this session. The session was given by Raghava sir, we are able to understand each and every concept and also we learn cognitive empathy and affective emotional empathy. In this session we learnt about emotional intelligence assignments we really enjoyed at this moment. We feel this is a great opportunity for us to thank you so much sir.`,
        },
        {
            date: '02-03-2023',
            studentName: 'S.Bhavani',
            studentGroup: 'final MPC',
            content: `Today's session was very good and also interesting and it gives more knowledge about sales marketing and business development strategies in healthcare. Sridhar babu Sir gives more information about this session. Sir gives more knowledge to us. We enjoyed ourselves a lot in today's session. It was useful to everyone. Sir teaching was very nice. It was a great session for me and my friends. Sir's way of teaching is very nice with examples. Thank you sir for spending your valuable time with us thank you sir.`,
        },
        {
            date: '06-03-2023',
            studentName: 'J.Kaveri',
            studentGroup: 'final MPC',
            content: `Today's session was interesting about sales management or relationship management. It is useful in everyday life. Raghava sir explained the topic in a way which we can understand by day to day situations by assignments. In this session we learn many things and participate by explaining the situations and we understand them. Sir way of teaching was very good. We enjoyed the session and we learn new things by this session. We feel this is a great opportunity for us. It is a pleasure to be a part of this training program sir. Thank you sir.`,
        },
        {
            date: '09-03-2023',
            studentName: 'R.Gouthami',
            studentGroup: 'final MPC',
            content: `Today's session was very wonderful class medico legal case management. It is useful in future. Nagesh sir explanation was nice, which we can every topic understanding. This session is interesting, it is the about the life and hospitals working in your work style. We enjoyed the session and we learned new topics. This is a nice class for each and every topic I understand. This is a great opportunity for us. Thank you sir.`,
        },
        {
            date: '10-03-2023',
            studentName: 'I.Indumathi',
            studentGroup: 'final MPC',
            content: `Today's session was interesting and excellent about managing failure and adversity. It is useful to my life. Raghava sir explained the concept. It is very nice. We are all understanding very well. We get so much knowledge about how failures manage. Sir gave so much information about managing failures. In this session we learn so many things. Sir's way of teaching is very good. We understand very well. I am so excited to listen to Raghava sir's session. So I am learning so much and gaining so much knowledge. We enjoyed the session. Thank you sir for giving this knowledge and we feel this is a great opportunity to all of us. Thank you sir.`,
        },
        {
            date: '12-03-2023',
            studentName: 'R.Gouthami',
            studentGroup: 'final MPC',
            content: `Today session was taken by teja sir about hospital management information system (HMIS), crisis management in hospitals and emergency codes in hospitals and also we learnt about how will be the documentation in hospitals, really we are get to know the new things, which we don't know before sir taught us very interestingly about above topics very clearly. The way of explanation made us focus on the subject of teaching. I am glad to say that I have learnt so many new things from this whole day session from morning to evening we understood today’s session.`,
        },
    ]);

    return (
        <div className='p-5'>
            <h1 className='text-center uppercase font-bold text-xs'>Testimonials</h1>
            <h1 className='text-center mt-5 text-2xl mb-5'>Student <span className='text-blue-700'>Reviews</span></h1>
            <Carousel showArrows={true}>
                {
                    sessions.map((session,index)=>{
                        return(
                            <Comp session={session}/>
                        );
                    })
                }
            </Carousel>
        </div>
    )
}

export default StudentReviews