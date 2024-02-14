import Image from 'next/image'
import React from 'react'

function Aboutus() {
  return (
    <div className='my-28 min-h-screen'>
        <div>
            <Image src="/aboutus.jpg" alt='about us' height={300} width={1200} loading='lazy' style={{height:"300px", width:"100vw", objectFit:"cover"}} />
        </div>

        <div className='flex justify-center items-center flex-col'>
            <h1 className='my-16 font-bold text-3xl'>Welcome to Aura Stays - Your Gateway to Kashmir</h1>
            <div className='p-6 flex flex-col items-center justify-center gap-8 w-4/6'>
                <p className='text-center'>At Aura Stays, we believe that travel is not just about visiting destinations; it's about experiencing the essence of a place, immersing yourself in its culture, and creating memories that last a lifetime. Nestled in the breathtakingly beautiful valley of Srinagar, Kashmir, Aura Stays is your trusted partner in exploring the mesmerizing land of the Himalayas.</p>
                <h2 className='font-bold text-2xl'>Our Story</h2>
                <p className='text-center'>Founded with a passion for hospitality and a love for Kashmir's unparalleled beauty, Aura Stays has been a pioneer in providing unforgettable travel experiences since [year of establishment]. What started as a humble endeavor has now grown into a renowned name synonymous with excellence and authenticity in the tourism industry of Kashmir.</p>
                <h2 className='font-bold text-2xl'>Our Mission</h2>
                <p className='text-center'>At Aura Stays, our mission is simple yet profound - to redefine the way travelers experience Kashmir. We strive to go beyond the conventional tourist trails and offer our guests a deeper, more meaningful connection with the land, its people, and its traditions. With a commitment to responsible tourism and sustainable practices, we aim to leave a positive impact on the communities we serve and the environment we cherish.</p>
                <h2 className='font-bold text-2xl'>Why Choose Aura Stays?</h2>
                <h3 className='font-semibold text-xl'>Authentic Experiences</h3>
                <p className='text-center'>Immerse yourself in the rich cultural tapestry of Kashmir with our handpicked experiences. From serene houseboat stays on Dal Lake to adventurous treks in the Himalayas, we offer a diverse range of activities tailored to suit every traveler's interests.</p>
                <h3 className='font-semibold text-xl'>Personalized Service</h3>
                <p className='text-center'>At Aura Stays, we believe in the power of personalized service. From the moment you reach out to us until the completion of your journey, our dedicated team ensures that every aspect of your trip is tailored to perfection. Whether it's arranging customized itineraries or providing expert guidance, we are here to make your travel dreams a reality.</p>
                <h3 className='font-semibold text-xl'>Local Expertise</h3>
                <p className='text-center'>As natives of Kashmir, we possess an intimate knowledge of the region's hidden gems and lesser-known attractions. Let our local experts guide you through the labyrinthine lanes of Srinagar, introduce you to authentic Kashmiri cuisine, and unveil the secrets of this enchanting land like no one else can.</p>
                <h3 className='font-semibold text-xl'>Unmatched Hospitality</h3>
                <p className='text-center'>Hospitality is at the heart of everything we do at Aura Stays. From the warm welcome of our staff to the impeccable service throughout your stay, we ensure that you feel like a cherished guest, not just a customer. Let us pamper you with our legendary Kashmiri hospitality and make your vacation truly unforgettable.</p>
                <h2 className='font-bold text-2xl'>Get in Touch</h2>
                <p className='text-center'>Ready to embark on your journey to Kashmir? Reach out to us today to start planning your dream vacation with Aura Stays. Whether you're a solo traveler, a couple seeking romance, or a family in search of adventure, we have the perfect itinerary waiting for you. Come, experience the magic of Kashmir with Aura Stays - where every moment is a cherished memory!</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutus