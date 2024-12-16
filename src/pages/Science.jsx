import React from 'react'
import Cs from '../components/Departments/Cs';
import Chem from '../components/Departments/Chem';
import Botany from '../components/Departments/Botany';
import Zoology from '../components/Departments/Zoology';
import Biotech from '../components/Departments/Biotech';
import Bchem from '../components/Departments/Bchem';
import Phy from '../components/Departments/Phy';
import Math from '../components/Departments/Math';
import Stats from '../components/Departments/Stats';
import Eco from '../components/Departments/Eco';
import Psd from '../components/Departments/Psd';

const Science = () => {
  return (
    <div>
      <Cs/>
      <Chem/>
      <Botany/>
      <Zoology/>
      <Biotech/>
      <Bchem/>
      <Phy/>
      <Math/>
      <Stats/>
      <Eco/>
      <Psd/>
    </div>
  )
}

export default Science;