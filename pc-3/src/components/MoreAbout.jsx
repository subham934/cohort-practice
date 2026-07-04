import React from 'react'
import { useParams } from 'react-router'
const MoreAbout = () => {
    const {aboutId} = useParams();
  return (
    <div>
        <h1 className="text">MoreAbout {aboutId}</h1>
    </div>
  )
}

export default MoreAbout