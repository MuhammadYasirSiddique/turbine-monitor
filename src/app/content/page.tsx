import React from 'react'
import Image from 'next/image'

const BarChart = () => {
  return (
    <div className='mt-10 mx-16 md:mx-10 mx flex flex-wrap justify-center items-center '>

    <div>
      <Image src={'/BarChart.png'} alt={'Bar Chart'} width={500} height={500} className='m-5' />
    </div>
    <div>
      <Image src={'/PieChart.png'} alt={'Pie Chart'} width={500} height={500} className='m-5' />
    </div>
    <div>
      <Image src={'/Trend.png'} alt={'Trend Chart'} width={500} height={500} className='m-5' />
    </div>
      </div>
  )
}

export default BarChart