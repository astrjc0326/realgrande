import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1000);
  }, [])
  return (
    <div>
      <h1 className='text-center'>
      Page Not Found, REDIRCT...
      </h1>
    </div>
  )
}

export default PageNotFound
