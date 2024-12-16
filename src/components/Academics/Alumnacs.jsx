import React from 'react';
import pfd from '../../pages/pdf.png';

const LinkCards = ({ links }) => (
  <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
    {links.map((link, index) => (
      <div data-aos="fade-up border h-32">
        <h1>{link.label}</h1>
      </div>
    ))}
  </div>
);

const Alumnacs = () => {
  let demoAlumnacs = [
    {
      "label": "2023-2024",
      "link": "https://drive.google.com/file/d/1OWECsIMYvQlYBMnI4Qx9OSgJBZ2YjkMc/view?usp=sharing"
    }, {
      "label": "2023-2024",
      "link": "https://drive.google.com/file/d/1T6dYIN7SxIkh_lWDlqWMm9TAnsd2RRaG/view?usp=sharing"
    }, {
      "label": "2022-2023",
      "link": "https://drive.google.com/file/d/1IwOtgH0rklfoNRDuhjFVv56VvKOWbD_d/view?usp=sharing"
    }, {
      "label": "2022-2023",
      "link": "https://drive.google.com/file/d/1HSrYppynq0r2RDMA0TEc4ncoXXAao7d3/view?usp=sharing"
    }, {
      "label": "2022-2023",
      "link": "https://drive.google.com/file/d/1zG94Za3U_Jv8EHfHtzWLTOKVkU6qBf3p/view?usp=sharing"
    }, {
      "label": "2022-2023",
      "link": "https://drive.google.com/file/d/1zR-d25ALUj2A5VeugaOgTvI_m-kop-_m/view?usp=sharing"
    }, {
      "label": "2021-2022",
      "link": "https://drive.google.com/file/d/1HdnbxICYdse51zjW_zJNXqGDWkEd6bLe/view?usp=sharing"
    }, {
      "label": "2021-2022",
      "link": "https://drive.google.com/file/d/1y28FuCdbpqXHpdLLPoe6y8XTA7GrTsYK/view?usp=sharing"
    }, {
      "label": "2021-2022",
      "link": "https://drive.google.com/file/d/19Fjynd8xjJ4ZLqp20Rm9DUnwUpiDZ7EW/view?usp=sharing"
    }, {
      "label": "2021-2022",
      "link": "https://drive.google.com/file/d/16qiLywUyFpyx1GStMGeP5h9vd8VclExJ/view?usp=sharing"
    }, {
      "label": "2020-2021",
      "link": "https://drive.google.com/file/d/1eKjCqg25Hud5vEr0Isj-7WUkp6Wz9bx-/view?usp=sharing"
    }, {
      "label": "2020-2021",
      "link": "https://drive.google.com/file/d/1V6n2EVOgB7zpMlZEvzuLfQ3756pA-Dod/view?usp=sharing"
    }, {
      "label": "2020-2021",
      "link": "https://drive.google.com/file/d/1NcwKd4CCqsUO-b8E_HWApS-qOqFrusOY/view?usp=sharing"
    }, {
      "label": "2020-2021",
      "link": "https://drive.google.com/file/d/1s7KU6Qd2u_zHfhp5nbyYh6B3uUAAMyT4/view?usp=sharing"
    }, {
      "label": "2019-2020",
      "link": "https://drive.google.com/file/d/1I0Rv9XeMaUE5FP8nx8__AbAPCzK7GbBK/view?usp=sharing"
    }, {
      "label": "2019-2020",
      "link": "https://drive.google.com/file/d/13fHM5knV-ESzsr_czB_lxVydXXEYf9Uz/view?usp=sharing"
    },

  ];

  return (
    <div className="py-16 px-4 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl lg:px-8">
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Academic Calendar
              </th>
              <th scope="col" class="px-6 py-3">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {
              demoAlumnacs.map((dta, index) => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                      {dta.label}
                    </th>
                    <td class="px-6 py-4 flex justify-center">
                      <a href={dta.link} target="_blank" rel="noopener noreferrer" class="">
                        <img src={pfd} alt="" className='w-10'/>
                      </a>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Alumnacs;


