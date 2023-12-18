
import React from 'react';
import { useSelector } from 'react-redux';
import './RegSuccess.css';

export default function RegSuccess() {
  const userSign = useSelector((state) => state.userSignin);
  const { userInfo } = userSign;

  return (
    <div className='onboard-container'>
      <div className='onboard-content'>
        <img src='/images/regsuccess.png' alt='Success Icon' className='avatar' />
        <div className='title'>Registration Successful</div>
      </div>
      <div className='details'>
        <div className='detail-row'>
          {userInfo && (
            <>
              <span className='label'>Name:</span> {userInfo.name}
            </>
          )}
        </div>
        <div className='detail-row'>
          {userInfo && (
            <>
              <span className='label'>DOB:</span> {userInfo.dob}
            </>
          )}
        </div>
        <div className='detail-row'>
          {userInfo && (
            <>
              <span className='label'>Email:</span> {userInfo.email}
            </>
          )}
        </div>
        <div className='detail-row'>
          {userInfo && (
            <>
              <span className='label'>Gender:</span> {userInfo.gender}
            </>
          )}
        </div>
        <div className='detail-row'>
          {userInfo && (
            <>
              <span className='label'>Batch:</span> {userInfo.batch}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
