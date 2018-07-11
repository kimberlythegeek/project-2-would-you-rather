import React from 'react'
import loadingIcon from '../static/logo.gif'

const LoadingPage = () => (
  <div className='loading-page'>
  <div className='text-center'>
  <img src={loadingIcon} alt='page is loading. please wait.'/>
  </div>
  </div>
)

export default LoadingPage