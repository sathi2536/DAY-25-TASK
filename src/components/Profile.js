import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Profile() {
  return (
    <>
      <div>
        <h2>Profile</h2>
        <h3>The Sub Component are:</h3>
        <ul>
          <Link to="details">
            <li>Profile Details</li>
          </Link>
          <Link to="reset-password">
            <li>Reset Password</li>
          </Link>
        </ul>
        <Outlet />
      </div>
    </>
  );
}

export default Profile