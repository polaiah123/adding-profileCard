import React from 'react'

const ProfileCard = ({title, handle, image}) => {
  return (
    <div>
        <img src={image} alt=''/>
        <h1>
            {title}
        </h1>
        <p>{handle}</p>
    </div>
  )
}

export default ProfileCard