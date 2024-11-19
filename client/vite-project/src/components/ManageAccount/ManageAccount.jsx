import React from 'react';
import './manageaccount.css'

const ManageAccount = () => {
  return (
    <div className='manage-account-container'>
        <div className="manage-grid-container">
            <div className="manage-grid-item">
                <div className='manage-grid-item-icon'></div>
                <div className='manage-grid-item-title'>
                  <h2>Password</h2>
                </div>
                <div className='manage-grid-item-description'></div>
            </div>
            <div className="manage-grid-item">Email</div>
            <div className="manage-grid-item">Link accounts</div>
            <div className="manage-grid-item">Security</div>
            <div className="manage-grid-item">Orders</div>
            <div className="manage-grid-item">Redeem</div>
            <div className="manage-grid-item">My Cases</div>
            <div className="manage-grid-item">Ban history</div>
        </div>
    </div>
  )
}

export default ManageAccount