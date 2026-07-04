import React from 'react'
import { useParams } from 'react-router'
const AnyCourse = () => {
    const {ID} = useParams()
  return (
    <div>AnyCourse {ID}</div>
  )
}

export default AnyCourse