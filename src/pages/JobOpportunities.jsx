import React from 'react'

const JobOpportunities = () => {

    const data = [
        {
            year: "2018-19",
            no: "1",
            stu: "16",
            placed: "12"
        },
        {
            year: "2019-20",
            no: "1",
            stu: "22",
            placed: "5"
        },
        {
            year: "2020-21",
            no: "2",
            stu: "116",
            placed: "36"
        },
        {
            year: "2021-22",
            no: "4",
            stu: "115",
            placed: "50"
        },
        {
            year: "2022-23",
            no: "5",
            stu: "297",
            placed: "140"
        }
    ];

    const studentsData1 = [
        { sNo: 1, name: 'K. Gayatri', course: 'B.Com Computers' },
        { sNo: 2, name: 'K. Sneha Sheela', course: 'B.Com Computers' },
        { sNo: 3, name: 'K. Radhika', course: 'B.Sc. MSCs' },
        { sNo: 4, name: 'Shaik Saba', course: 'B.Sc. MSCs' },
        { sNo: 5, name: 'Rupa Sharma', course: 'B.Sc. MSCs' },
        { sNo: 6, name: 'B. Lahari', course: 'B.Sc. MSCs' },
        { sNo: 7, name: 'S. Vijayalaxmi', course: 'B.Sc. MSCs' },
        { sNo: 8, name: 'T.Priyanka', course: 'B.Sc. MPC' },
        { sNo: 9, name: 'V.Rishitha', course: 'B.Sc. MPC' },
        { sNo: 10, name: 'V Sandhya Gandhi', course: 'B.Sc. MPC' },
        { sNo: 11, name: 'G.Kalpana', course: 'B.Sc. MPC' },
        { sNo: 12, name: 'G.Hyma', course: 'B.Com CA' },
        { sNo: 13, name: 'B.Sirimuvva', course: 'B.Com CA' },
        { sNo: 14, name: 'G. Veena', course: 'B.Com CA' },
        { sNo: 15, name: 'D. Sumanika', course: 'B.Com CA' },
        { sNo: 16, name: 'P.Pravallika', course: 'B.Sc. BZC' },
    ];

    const studentsData2 = [
        { sNo: 1, name: 'C.Thirupathamma', course: 'B.Sc. MSCs' },
        { sNo: 2, name: 'S.Sirisha', course: 'B.Sc. MSCs' },
        { sNo: 3, name: 'B.Mounica', course: 'B.Sc. MSCs' },
        { sNo: 4, name: 'K.Varalaxmi', course: 'B.Sc. MSCs' },
        { sNo: 5, name: 'B.Likitha', course: 'B.Sc. MSCs' },
        { sNo: 6, name: 'Ch.Pavitra', course: 'B.Sc. MSCs' },
        { sNo: 7, name: 'S.Nikitha', course: 'B.Sc. MSCs' },
        { sNo: 8, name: 'Rachana', course: '' },
        { sNo: 9, name: 'V.Swetha', course: 'B.Com CA' },
        { sNo: 10, name: 'Shireesha Maloth', course: '' },
        { sNo: 11, name: 'Preethi', course: 'B.Com CA' },
    ];

    const studentsData3 = [
        { sNo: 1, name: 'Ambika Madeevala', course: 'B.Com CA' },
        { sNo: 2, name: 'V.Ramya', course: 'B.Com CA' },
        { sNo: 3, name: 'CH.Srujana', course: 'B.Com CA' },
        { sNo: 4, name: 'Rasakonda Pavani', course: 'B.Com CA' },
        { sNo: 5, name: 'Mudguanti Kavitha', course: 'B.Com CA' },
        { sNo: 6, name: 'S.Praneetha', course: 'B.Com CA' },
        { sNo: 7, name: 'Dayalla Shailaja', course: 'B.Com CA' },
        { sNo: 8, name: 'Kummari Nandini', course: 'B.Com CA' },
        { sNo: 9, name: 'Medi Prashanthi', course: 'B.Sc. MSCs' },
        { sNo: 10, name: 'Vinitha Ganta', course: 'B.Sc. MSCs' },
        { sNo: 11, name: 'Likitha Kasula', course: 'B.Sc. MSCs' },
        { sNo: 12, name: 'Kalavathi .M', course: 'B.Sc. MSCs' },
        { sNo: 13, name: 'G.Sravika', course: 'B.Sc. MSCs' },
        { sNo: 14, name: 'M.Pravalika', course: 'B.Sc. MSCs' },
        { sNo: 15, name: 'Goddie Meghana', course: 'B.Sc. MSCs' },
        { sNo: 16, name: 'Posanapally Swetha', course: 'B.Sc. MSCs' },
        { sNo: 17, name: 'Ramya Sree Morarathi', course: 'B.Sc. MSCs' },
        { sNo: 18, name: 'M.Kalyani', course: 'B.Sc. MSCs' },
        { sNo: 19, name: 'Thumma Akhila', course: 'B.Sc. MSCs' },
        { sNo: 20, name: 'Manda Ruchitha', course: 'B.Sc. MSCs' },
        { sNo: 21, name: 'Burra Lalitha', course: 'B.Sc. MSCs' },
        { sNo: 22, name: 'Kondaparthi Navya', course: 'B.Sc. MSCs' },
        { sNo: 23, name: 'P.Shivani', course: 'B.Sc. MSCs' },
        { sNo: 24, name: 'Masapata Akhila', course: 'B.Sc. MPC' },
        { sNo: 25, name: 'Rekha', course: 'B.Sc.BZC' },
        { sNo: 26, name: 'D.Prathyusha', course: 'B.Sc.BZC' },
        { sNo: 27, name: 'Sanda Mounika', course: 'B.Sc.BZC' },
        { sNo: 28, name: 'M.Kalavathi', course: 'B.Sc.BZC' },
        { sNo: 29, name: 'Jogu Uma', course: 'BA.(HEP)' },
    ];

    const studentsData4 = [
        { sNo: 1, name: 'Sathwika Lagishetti', course: 'Bcom(comp App)' },
        { sNo: 2, name: 'Roshini', course: 'Bsc.Mpcs' },
        { sNo: 3, name: 'Rishika', course: 'Bsc.Mpcs' },
        { sNo: 4, name: 'M.Meghana', course: 'BSc MPC' },
        { sNo: 5, name: 'T.Supriya', course: 'BSc. MSCs' },
        { sNo: 6, name: 'N.Alekhya', course: 'Bsc.BBC' },
        { sNo: 7, name: 'V.Ravali', course: 'Bsc.Mpcs' },
        { sNo: 8, name: 'M.Durgabhavani', course: 'B.com(CA)' },
        { sNo: 9, name: 'Y.Srilatha', course: 'BSc. MSCs' },
        { sNo: 10, name: 'Jareena', course: 'B.com(CA)' },
        { sNo: 11, name: 'M.Jyothi', course: 'Bsc.Mpcs' },
        { sNo: 12, name: 'Saba begum', course: 'B.com(CA)' },
        { sNo: 13, name: 'B.Poojitha', course: 'Bsc.MPC' },
        { sNo: 14, name: 'Ramyasri Indrala', course: 'B. Tech' },
        { sNo: 15, name: 'B.Soujanya', course: 'BSC.MSCS' },
        { sNo: 16, name: 'Sukanya', course: 'Bsc.MPC' },
        { sNo: 17, name: 'Nandini', course: 'BSC.MSCS' },
        { sNo: 18, name: 'T.Vaishnavi', course: 'BSc MPC' },
    ];

    const studentsData5 = [
        { sNo: 1, name: 'Swetha Nagula', course: 'B.COM (CA)' },
        { sNo: 2, name: 'S.Keerthi', course: 'BSC MPCS' },
        { sNo: 3, name: 'Dasari Varshitha', course: 'BSC BZC' },
        { sNo: 4, name: 'Thallapalli Keerthana', course: 'B.SC MPC' },
        { sNo: 5, name: 'Vennempally Ravali', course: 'B.SC.MPCS' },
        { sNo: 6, name: 'Sheerisha Dasari', course: 'B. COM(CA)' },
        { sNo: 7, name: 'Dyavanapally Ravali', course: 'BSC BZC' },
        { sNo: 8, name: 'Yengannagari Priyanka', course: 'BSC MPCS' },
        { sNo: 9, name: 'Kammari Poornima', course: 'B.SC MSCS' },
        { sNo: 10, name: 'Devanaboina Shirisha', course: 'BSC(MSCS)' },
        { sNo: 11, name: 'Mallepu Nandini', course: 'B.COM(G)' },
        { sNo: 12, name: 'Gorla Nagamani', course: 'B.COM' },
        { sNo: 13, name: 'Koradala Ashwini', course: 'BSC.MPCS' },
        { sNo: 14, name: 'Manthri Prathyusha', course: 'B. COM CA' },
        { sNo: 15, name: 'M. Lalitha', course: 'B.SC MSCS' },
        { sNo: 16, name: 'Vennela', course: 'MPCS' },
        { sNo: 17, name: 'Sherupally Revathi', course: 'BA(HEP)' },
        { sNo: 18, name: 'Sandhyarani Manda', course: 'B.SC (MPCS)' },
        { sNo: 19, name: 'ModuguVanitha', course: 'B. SC(MPCS)' },
        { sNo: 20, name: 'Devarakonda Aparna', course: 'MSCS' },
        { sNo: 21, name: 'Kontham Prathyusha', course: 'BA(EPH)' },
        { sNo: 22, name: 'Pujakari Shilpa', course: 'BSC.BZC' },
        { sNo: 23, name: 'Manogna Bolla', course: 'BSC.MPCS' },
        { sNo: 24, name: 'M. Rajitha', course: 'B. SC MSCS' },
    ];

    const studentsData6 = [
        { sNo: 1, name: 'AMREEN FATHIMA', course: 'B.Com (CA)' },
        { sNo: 2, name: 'AMARACHINTHA GOUTHAMI', course: 'B.Sc (MSCS)' },
        { sNo: 3, name: 'KURUVA NEERAJA', course: 'BA (HPE)' },
        { sNo: 4, name: 'METTU RACHANA', course: 'B.Com (Gen)' },
        { sNo: 5, name: 'ANDIGA MADHAVI', course: 'BA (HEP)' },
        { sNo: 6, name: 'MARRI JYOTHI', course: 'B.Sc (BBC)' },
        { sNo: 7, name: 'RACHAMALLA SWATHI', course: 'B.Sc (MPC)' },
        { sNo: 8, name: 'RAVULA PRATHYUSHA', course: 'B.Com (Gen)' },
        { sNo: 9, name: 'DURGAM SUDHISHNAVI', course: 'B.Com (Gen)' },
        { sNo: 10, name: 'KODAPARTHI NIVYA', course: 'B.Com (CA)' },
    ];

    const studentsData7 = [
        { sNo: 1, name: 'BANGARI SWATHI', course: 'B.Sc (MPCS)' },
        { sNo: 2, name: 'JUPALLY KAVERI', course: 'B.Sc (MPC)' },
        { sNo: 3, name: 'PALLAVI JAKKULA', course: 'B.Sc (BBC)' },
        { sNo: 4, name: 'KOTHA SHAILAJA', course: 'B.Com (CA)' },
    ];

    const studentsData8 = [
        { sNo: 1, name: 'GONTELA NIKITHA', course: 'BA (HPE)' },
        { sNo: 2, name: 'PALVAI VAISHNAVI', course: 'B.Com (CA)' },
        { sNo: 3, name: 'ITHAVARI SAI POOJA', course: 'B.Com (CA)' },
        { sNo: 4, name: 'BUSHAPAGA SHARON ROSE', course: 'B.Com (CA)' },
        { sNo: 5, name: 'GUJJULA ANITHA', course: 'B.Sc (BBC)' },
    ];

    const studentsData9 = [
        { sNo: 1, name: 'PULIMAMIDI SHRAVANI', course: 'B.Sc (MPCS)' },
        { sNo: 2, name: 'PURAMSHETTY SHRAVANI', course: 'BA (HEP)' },
        { sNo: 3, name: 'PULLE LAVANYA', course: 'B.Com (CA)' },
        { sNo: 4, name: 'GOSKEWAR SRINIJA', course: 'B.Sc (MPCS)' },
        { sNo: 5, name: 'DEVARAKONDA APARNA', course: 'B.Sc (MSCS)' },
        { sNo: 6, name: 'POLE PAVANI', course: 'B.Com (CA)' },
        { sNo: 7, name: 'ANNABOINA DEEPIKA', course: 'B.Com (CA)' },
        { sNo: 8, name: 'DADEPOGU DEVAKUMARI', course: 'B.Com (Gen)' },
        { sNo: 9, name: 'KAVALI SWETHA', course: 'BA (HPE)' },
        { sNo: 10, name: 'RODDA SRAVANTHI', course: 'B.Sc (MSCS)' },
        { sNo: 11, name: 'JUPALLY AKHILA', course: 'B.Sc (MPCS)' },
        { sNo: 12, name: 'BAYI NIKHITHA', course: 'B.Com (CA)' },
        { sNo: 13, name: 'THAPPETLA PRABHUSHA', course: 'B.Sc (MSCS)' },
        { sNo: 14, name: 'LODI JYOTHSNA', course: 'B.Sc (MSCS)' },
        { sNo: 15, name: 'YELMANCHALI POOJA', course: 'B.Sc (MSCS)' },
        { sNo: 16, name: 'SHAIK ASHA', course: 'B.Com (CA)' },
        { sNo: 17, name: 'BOYA GAYATHRI', course: 'B.Sc (MSCS)' },
        { sNo: 18, name: 'BALABADRA SUNANDA', course: 'BA (HPE)' },
        { sNo: 19, name: 'NIMMALA ANUSHA', course: 'B.Com (CA)' },
        { sNo: 20, name: 'BODASU SHYAMALA', course: 'B.Sc (MPC)' },
        { sNo: 21, name: 'KALAVENI NEELIMA', course: 'B.Com (Gen)' },
        { sNo: 22, name: 'REDDY NAGARANI', course: 'BA (HEP)' },
        { sNo: 23, name: 'NELLUTLA INDU', course: 'BA (HPE)' },
        { sNo: 24, name: 'GUNJA SRAVANI', course: 'BA (HEP)' },
    ];

    const studentsDataNew = [
        { sNo: 1, name: 'T.Baby Prathyusha', course: 'B.Sc. MSCs' },
        { sNo: 2, name: 'Muddala Akhila', course: 'B.Sc. MSCs' },
        { sNo: 3, name: 'Thuniki Swathi', course: 'B.Sc. MSCs' },
        { sNo: 4, name: 'Laxmi Prasanna Koukuntla', course: 'B.Sc. MSCs' },
    ];

    const studentsDataNew1 = [
        { sNo: 1, name: 'Navya Kondaparthi', course: 'B.Sc. MSCs' },
    ];


    const studentsDataNew2 = [
        { sNo: 1, name: 'Abavati Sindhu', course: 'B.Sc. MSCs' },
        { sNo: 2, name: 'Manjula', course: 'B.Sc. MSCs' },
        { sNo: 3, name: 'Burra Loukya', course: 'B.Sc. MPCs' },
    ];

    const studentsDataNe3 = [
        { sNo: 1, name: 'RAMYA', course: 'B.Sc.MPC', batch: '2016-2019' },
        { sNo: 2, name: 'GOUNI MOUNIKA', course: 'BA EPH', batch: '2017-2020' },
        { sNo: 3, name: 'GOUTHAMI', course: 'B.Sc.BZC', batch: '2020-2023' },
        { sNo: 4, name: 'M.VANITHA REDDY', course: 'B.Sc.MPCS', batch: '2020-2023' },
        { sNo: 5, name: 'SAVITHA', course: 'B.Sc.BZC', batch: '2020-2023' },
        { sNo: 6, name: 'CH.BHAGYAVATHI', course: 'BA EPH', batch: '2020-2023' },
        { sNo: 7, name: 'CDIVYA', course: 'BA EPH', batch: '2020-2023' },
        { sNo: 8, name: 'SAMMAKKA', course: 'BA EPH', batch: '2020-2023' },
        { sNo: 9, name: 'SRAVANTHI', course: 'BA EPH', batch: '2020-2023' },
        { sNo: 10, name: 'ANUSHA', course: 'BA EPH', batch: '2020-2023' },
      ];

    return (
        <div className='text-lg mx-auto w-1/2'>
            <h1 className='text-center mt-5 font-bold'>MJPTBCWRDC, WARGAL PLACEMENT DETAILS:</h1>
            <div class="relative overflow-x-auto mt-10">
                <table class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='text-center'>
                            <th scope="col" class="px-6 py-3">
                                Year
                            </th>
                            <th scope="col" class="px-6 py-3">
                                No. of Job fairs Organized
                            </th>
                            <th scope="col" class="px-6 py-3">
                                No. of Students attended
                            </th>
                            <th scope="col" class="px-6 py-3">
                                No. of Students Placed
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr class={`border-b  text-center ${index %2 === 0 ? 'bg-blue-200 text-black' : ''}`}
                                    key={index}>
                                    <td class="px-6 py-4">{item.year}</td>
                                    <td class="px-6 py-4">{item.no}</td>
                                    <td class="px-6 py-4">{item.stu}</td>
                                    <td class="px-6 py-4">{item.placed}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <h1 className='p-3'>The college since its inception has an active placement cell which has facilitated the training and recruiting processes for its students in collaboration with various reputed multinational companies. Following is the batch wise data showing its placement activities:</h1>
            <div>
                <h1 className='font-bold p-3 text-xl text-blue-700'>Recruitees under Cognizant Technology Solutions</h1>
                <h1 className='p-3 font-bold text-2xl'>◘ 2016-2019</h1>
                <div className='mt-3'>
                    <table className='w-full mx-auto border text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead>
                            <tr className='text-center font-bold text-black'>
                                <th>S.No</th>
                                <th>Students Name</th>
                                <th>Course Studied</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsData1.map((student, index) => (
                                <tr class={` border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index %2 ===0 ? "bg-pink-200 text-black" : ""}`}
                                    key={index}>
                                    <td class="px-6 py-4">{student.sNo}</td>
                                    <td class="px-6 py-4">{student.name}</td>
                                    <td class="px-6 py-4">{student.course}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <h1 className='p-3 font-bold text-2xl'>◘ 2017-2020</h1>
            <div className='mt-3'>
                <table className='w-full  mx-auto border text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead>
                        <tr className='text-center font-bold text-black'>
                            <th>S.No</th>
                            <th>Students Name</th>
                            <th>Course Studied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData2.map((student, index) => (
                            <tr class={`border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index%2===0 ? "bg-green-200 text-black" : ""}`}
                                key={index}>
                                <td class="px-6 py-4">{student.sNo}</td>
                                <td class="px-6 py-4">{student.name}</td>
                                <td class="px-6 py-4">{student.course}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h1 className='p-3 font-bold text-2xl'>◘ 2018-2021</h1>
            <div className='mt-3'>
                <table className='w-full  mx-auto border text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead>
                        <tr className='text-center font-bold text-black'>
                            <th>S.No</th>
                            <th>Students Name</th>
                            <th>Course Studied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData3.map((student, index) => (
                            <tr class={` border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index%2===0 ? "bg-violet-200 text-black" : ""}`}
                                key={index}>
                                <td class="px-6 py-4">{student.sNo}</td>
                                <td class="px-6 py-4">{student.name}</td>
                                <td class="px-6 py-4">{student.course}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h1 className='p-3 font-bold text-2xl'>◘ 2019-2022</h1>
            <div className='mt-3'>
                <table className='w-full text-lg  mx-auto border text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead>
                        <tr className='text-center font-bold text-black'>
                            <th>S.No</th>
                            <th>Students Name</th>
                            <th>Course Studied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData4.map((student, index) => (
                            <tr class={` border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index%2===0 ? "bg-red-200 text-black" : ""}`}
                                key={index}>
                                <td class="px-6 py-4">{student.sNo}</td>
                                <td class="px-6 py-4">{student.name}</td>
                                <td class="px-6 py-4">{student.course}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h1 className='p-3 font-bold text-2xl'>◘ 2020-2023</h1>
            <div className='mt-3'>
                <table className='w-full text-lg  mx-auto border text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead>
                        <tr className='text-center font-bold text-black'>
                            <th>S.No</th>
                            <th>Students Name</th>
                            <th>Course Studied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData5.map((student, index) => (
                            <tr class={` border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index % 2 === 0 ? "bg-blue-200 text-black" : ""}`}
                                key={index}>
                                <td class="px-6 py-4">{student.sNo}</td>
                                <td class="px-6 py-4">{student.name}</td>
                                <td class="px-6 py-4">{student.course}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h1 className='mt-10'>In the academic year 2020-2023, MJPTBCWREIS – Degree colleges have made a MoU with Ethames School of Business Management to train and recruit students in Healthcare management. Under this, as a pilot college our institution got selected and following is the data pertaining to the placements activity.</h1>
            <h1 className='font-bold p-3 text-xl text-blue-700'>Meghavi Wellness</h1>
            <div className='mt-3'>
                <table className='w-full mx-auto border text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead>
                        <tr className='text-center font-bold text-black'>
                            <th>S.No</th>
                            <th>Students Name</th>
                            <th>Course Studied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData6.map((student, index) => (
                            <tr class={` border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index % 2 === 0 ? "bg-gray-400 text-black" : ""}`}
                                key={index}>
                                <td class="px-6 py-4">{student.sNo}</td>
                                <td class="px-6 py-4">{student.name}</td>
                                <td class="px-6 py-4">{student.course}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h1 className='font-bold p-3 text-xl text-blue-700'>Arete Hospitals</h1>
            <div className='mt-3'>
                <table className='w-full mx-auto border text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead>
                        <tr className='text-center font-bold text-black'>
                            <th>S.No</th>
                            <th>Students Name</th>
                            <th>Course Studied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData7.map((student, index) => (
                            <tr class={` border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index%2===0 ? "bg-pink-200 text-black" : ""}`}
                                key={index}>
                                <td class="px-6 py-4">{student.sNo}</td>
                                <td class="px-6 py-4">{student.name}</td>
                                <td class="px-6 py-4">{student.course}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h1 className='font-bold p-3 text-xl text-blue-700'>Rainbow Hospitals</h1>
            <div className='mt-3'>
                <table className='w-full mx-auto border text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead>
                        <tr className='text-center font-bold text-black'>
                            <th>S.No</th>
                            <th>Students Name</th>
                            <th>Course Studied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData8.map((student, index) => (
                            <tr class={` border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index %2 ===0 ? "bg-green-200 text-black" : ""}`}
                                key={index}>
                                <td class="px-6 py-4">{student.sNo}</td>
                                <td class="px-6 py-4">{student.name}</td>
                                <td class="px-6 py-4">{student.course}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h1 className='font-bold p-3 text-xl text-blue-700'>Yashoda Hospitals</h1>
            <div className='mt-3'>
                <table className='w-full mx-auto border text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead>
                        <tr className='text-center font-bold text-black'>
                            <th>S.No</th>
                            <th>Students Name</th>
                            <th>Course Studied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData9.map((student, index) => (
                            <tr class={`border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index %2 ==0 ? 'bg-slate-400 text-white' : ''}`}
                                key={index}>
                                <td class="px-6 py-4">{student.sNo}</td>
                                <td class="px-6 py-4">{student.name}</td>
                                <td class="px-6 py-4">{student.course}</td>
                            </tr>
                        ))}
                    </tbody> 
                </table>
            </div>
            <div>
                <h1 className='font-bold p-3 text-xl text-blue-700'>Recruitees under Tata Consultancy Services</h1>
                <h1 className='p-3 font-bold text-2xl'>◘ 2018-2021</h1>
                <div className='mt-3'>
                    <table className='w-full mx-auto border text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead>
                            <tr className='text-center font-bold text-black'>
                                <th>S.No</th>
                                <th>Students Name</th>
                                <th>Course Studied</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsDataNew.map((student, index) => (
                                <tr class={`border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index %2 === 0 ? "bg-red-500 text-white" : ""}`}
                                    key={index}>
                                    <td class="px-6 py-4">{student.sNo}</td>
                                    <td class="px-6 py-4">{student.name}</td>
                                    <td class="px-6 py-4">{student.course}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h1 className='font-bold p-3 text-xl text-blue-700'>Recruitees under Infor India Pvt. Limited</h1>
                <h1 className='p-3 font-bold text-2xl'>◘ 2019-2022</h1>
                <div className='mt-3'>
                    <table className='w-full mx-auto border text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead>
                            <tr className='text-center font-bold text-black'>
                                <th>S.No</th>
                                <th>Students Name</th>
                                <th>Course Studied</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsDataNew1.map((student, index) => (
                                <tr class={`border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index %2 ==0 ? "bg-violet-300" : ""}`}
                                    key={index}>
                                    <td class="px-6 py-4">{student.sNo}</td>
                                    <td class="px-6 py-4">{student.name}</td>
                                    <td class="px-6 py-4">{student.course}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h1 className='font-bold p-3 text-xl text-blue-700'>Recruitees under Unistring Technology Solutions</h1>
                <h1 className='p-3 font-bold text-2xl'>◘ 2019-2022</h1>
                <div className='mt-3'>
                    <table className='w-full mx-auto border text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead>
                            <tr className='text-center font-bold text-black'>
                                <th>S.No</th>
                                <th>Students Name</th>
                                <th>Course Studied</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsDataNew2.map((student, index) => (
                                <tr class={` border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index %2 ==0 ? 'bg-slate-200 text-black' : ''}`}
                                    key={index}>
                                    <td class="px-6 py-4">{student.sNo}</td>
                                    <td class="px-6 py-4">{student.name}</td>
                                    <td class="px-6 py-4">{student.course}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <h1 className='font-bold text-xl mt-10'>STUDENTS ACHIEVEMENT IN TSPLRB – 2023 CONSTABLE RECRUITMENT</h1>
            <p className='mt-3'>Career Guidance Cell based on the student’s requirement provided help to identify their career path and also ensure that they are focused in the right direction with regards to their career based on their caliber, scores, interest areas and long term forecasting. As part of this, the team has identified the students who are interested in preparing for the Telangana State Police Services. The Cell with the help of the Lecturers from Arts, Commerce and Sciences, planned for a crash course to ensure the students clear their TSPLRB conducted Prelims exam. Preparation for the students started off early in the final year with a well planned course schedule comprising of quantitative aptitude, logical reasoning, Verbal ability, General Studies, General Knowledge and Current affairs. Physical Education Department took care of the training the students for Physical Events. <br />
                The hard work of the Students and the Staff got paid off when 10 students bagged State Government Jobs as TSPLRB Constables at a very tender age.
            </p>
            <div className='mt-3'>
                    <table className='w-full mx-auto border text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead>
                            <tr className='text-center font-bold text-black'>
                                <th>S.No</th>
                                <th>Students Name</th>
                                <th>Course</th>
                                <th>Batch</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsDataNe3.map((student, index) => (
                                <tr class={`border-b dark:bg-gray-800 dark:border-gray-700 text-center ${index %2 ==0 ? 'bg-pink-300 text-black' : ''}`}
                                    key={index}>
                                    <td class="px-6 py-4">{student.sNo}</td>
                                    <td class="px-6 py-4">{student.name}</td>
                                    <td class="px-6 py-4">{student.course}</td>
                                    <td class="px-6 py-4">{student.batch}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </div>
    )
}

export default JobOpportunities