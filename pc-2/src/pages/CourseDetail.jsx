import React from 'react'
import {useParams} from 'react-router'
const CourseDetail = () => {

    const params = useParams()

  return (
    <div>CourseDetail {params.ID}</div>
  )
}

export default CourseDetail