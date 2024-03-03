import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

export const Discover = () => {
  if(window.location.toString().includes("discover")) {
    document.getElementById('topbar').style.display = 'flex'
    document.getElementById('sidebar').style.display = 'block'
  }

  const [userImgae, setUserImage] = useState(['./imgs/dummyUserImg.png', './imgs/dummyUserImg1.png', './imgs/dummyUserImg2.png', './imgs/dummyUserImg3.png', './imgs/dummyUserImg4.png', './imgs/dummyUserImg5.png', './imgs/dummyUserImg6.png'])

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  return (
    <div className='h-[90dvh] bg-[#F7F8FC] rounded-tl-lg'>
      <h1 className='text-5xl py-5 px-10 font-medium text-[#E94057]'>Discover</h1>
      <div className='flex justify-center my-10'>
        <div 
          style={{
            width: '90vw',
            maxWidth: '260px',
            height: '300px'
          }
        }>
          {
            userImgae.map((img) => (
              <TinderCard
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                preventSwipe={['right', 'left']}
                className='absolute'
                style={{position: 'absolute'}}
              >
                <div 
                  style={{ 
                    backgroundImage: 'url(' + img + ')',
                    position: 'relative',
                    backgroundColor: '#fff',
                    width: '20rem',
                    maxWidth: '20rem',
                    height: '30rem',
                    boxShadow: '0px 0px 60px 0px rgba(0,0,0,0.30)',
                    borderRadius: '20px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'grab'
                  }}
                >
              </div>
              </TinderCard>
            ))
          }
        </div>
      </div>
    </div>
  )
}
