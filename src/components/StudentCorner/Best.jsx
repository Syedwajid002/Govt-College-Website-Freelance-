import React from 'react'
import { HalfPageBanner } from '../General/Half';
import img from './1.png'
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';

const Best = () => {
    return (
        <div>
            <HalfPageBanner name="Best Practices" />
            <h1 className='mt-4 text-2xl font-bold'>Kitchen Garden</h1>
            <div className='grid grid-cols-2 mt-3'>
                <img src={img} className='w-full h-full rounded-xl' />
                <div className='p-3'>
                    <h1>The vast campus also has a space for kitchen  gardening. Kitchen gardening is to be effectively    maintained by the gardener & students</h1>
                    <h1>1. Vegetables (Organic) like Brinjal, Tomato, bottle guard, leafy vegetables, curry leaves etc. to be cultivated which mostly suits to the soil in the campus.
                    </h1>
                    <h1>2. The harvest yield is entered in the issue register and the vegetables are used in cooking for the students.</h1>
                    <h1>3. Around 25% of the vegetables required in the kitchen should be from the kitchen garden.</h1>
                    <h1>4. Total requirement of leafy vegetables are supplied from the kitchen garden itself.</h1>
                    <h1>5. The Botany Department also maintains the medicinal plant garden.</h1>
                    <h1>6.  Water dripping system is used to minimize the utilization of water.</h1>
                    <h1>7. Apart from this, an organic pit is also maintained by the students duly dumping the vegetable waste from the mess.</h1>
                    <h1>8. In addition to the above, the members from the gram panchayat should be initiated for  some of the plants such as guava, neem, etc in campus.</h1>
                </div>
            </div>
            <h1 className='mt-4 text-2xl font-bold'>Organic Pit</h1>
            <div className='mt-3'>
                <img src={img2} className='w-full h-full rounded-xl' />
                <div className='p-3'>
                    <h1>As per the feasibility, organic pit can be maintained in the college premises.  In MJPTBCWRDC, Wargal, everyday we are getting 50 Kg of vegetable waste from our mess. In order to make use of this vegetable waste, we made a pit 4X3 Sq. Mts. Daily our kitchen staff will keep the waste in the pit. Once in a month, we make use of that as manure for the kitchen garden.</h1>
                </div>
            </div>
            <h1 className='mt-4 text-2xl font-bold'>Waste water management</h1>
            <div className='mt-3'>
                <img src={img3} className='w-full h-full rounded-xl' />
                <div className='p-3'>
                    <h1>Waste water management can be taken up in the college. In MJPTBCWRDC, Wargal, we  made a large pit and the washroom water is made to fill the pit through a pipeline. Using 1 HP motor, the waste water is used for gardening purposes.</h1>
                </div>
            </div>
            <h1 className='mt-4 text-2xl font-bold'>Water Drip system</h1>
            <div className='mt-3'>
                <img src={img4} className='w-full h-full rounded-xl' />
                <div className='p-3'>
                    <h1>To save the water drip system can be arranged in the garden. In MJPTBCWRDC, Wargal, a drip system is arranged in our kitchen garden to save the water.</h1>
                </div>
            </div>
            <h1 className='mt-4 text-2xl font-bold'>Rare Plants Garden</h1>
            <div className='mt-3'>
                <img src={img5} className='w-full h-full rounded-xl' />
                <div className='p-3'>
                    <h1> Botanical Garden with rare plants can be maintained. MJPTBCWRDC, Wargal has medicinal plants like cactus, ascinum, curcuma, touch me not plant, ashva ganda,clitoria ternatea, aloevera  etc</h1>
                </div>
            </div>
        </div>
    )
}

export default Best;