import React from 'react';
import PrincipalCard from '../cards/About/PrincipalCard';

let princiList = [
  {
    "name": "DR.RAMA KRISHNA RAO",
    "period": "2015-2016",
    "img": "https://lh7-us.googleusercontent.com/1b7Xqlh9rPFmxZ4a10ZuMVJn60Bha23mIVRVa4uvg5l-DacrUDwqrDba1OOX2ZyCPDu_aRD0Yo7eC0La86N01GPS1aeKAQYUFxavPs7y6H1BeQ7Nq-TQyK3aR_agIg07-AInbOQUk3RhTKirNvX5hg=s800"
  }, {
    "name": "DR. NEMELI SATYANARAYA REDDY",
    "period": "2016-2017",
    "img": "https://lh7-us.googleusercontent.com/xK3ylnRPDrdqfQFzbZgO1hyLaHcJYOSbskkASf8pXJnGiuk0hufeICbVVG2UCmcDPOcCTKOruOAcm8DOPGjJ6WsnZqQ9NnIhxhG5VnbNyu34Kb5jhQFKxmIkMETH3mqOCUeaEMpm7UAqjYibb_grow=s800"
  },
  {
    "name": "DR. V. VENKATESHWARA RAO",
    "period": "2017-2023",
    "img": "https://lh7-us.googleusercontent.com/ik0JhMKajUpsf_adFqgCItbYwQ5ncwgsHyKNiBSHPujwXpR94amTSlIaFEqmNBQro1VGL27pH67uc0Z8vFnxBlyhuTUCNKH_w2TW6JOaYEtdXokJq1ifIHMJzYc-BbwjE9_vSwNTEbxuwrXtSNPWMg=s800"
  },
];

const Principles = () => {
  return (
    <div className="flex flex-col  justify-center" style={{ minHeight: "80vh"}}>
      <div className="text-center text-blue-700 text-4xl font-bold mb-8 " data-aos="fade-up">
        FORMER PRINCIPALS
      </div>
      <div className='flex flex-wrap justify-center items-center'>
        {princiList.map((course) => (
          <div key={course.id} className="mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
            <PrincipalCard name={course.name} period={course.period} img={course.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;
