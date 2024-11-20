import React from 'react';
import './manageaccount.css';
import PasswordIcon from '@mui/icons-material/VpnKeyOutlined';
import MailIcon from '@mui/icons-material/EmailOutlined';
import LinkAccountsIcon from '@mui/icons-material/AccountCircleOutlined';
import SecurityIcon from '@mui/icons-material/SecurityOutlined';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import ScanIcon from '@mui/icons-material/QrCodeScannerOutlined';
import FileIcon from '@mui/icons-material/FolderOpenOutlined';
import BanIcon from '@mui/icons-material/PanToolOutlined';

const ManageAccount = () => {
  return (
    <div className='manage-account-container'>
        <div className="manage-grid-container">
            <div className="manage-grid-item">
                <div className='manage-grid-item-icon'>
                  <PasswordIcon style={{fontSize: '32px'}} />
                </div>
                <div className='manage-grid-item-title'>
                  <h2>Password</h2>
                </div>
                <div className='manage-grid-item-description'>
                  Reset or recover my password
                </div>
            </div>
            <div className="manage-grid-item">
                <div className='manage-grid-item-icon'>
                  <MailIcon style={{fontSize: '32px'}}/>
                </div>
                <div className='manage-grid-item-title'>
                  <h2>Email</h2>
                </div>
                <div className='manage-grid-item-description'>Change my email address</div>
            </div>
            <div className="manage-grid-item">
                <div className='manage-grid-item-icon'>
                  <LinkAccountsIcon  style={{fontSize: '32px'}}/>
                </div>
                <div className='manage-grid-item-title'>
                  <h2>Link accounts</h2>
                </div>
                <div className='manage-grid-item-description'>Link or unlink your EA Account</div>
            </div>
            <div className="manage-grid-item">
                <div className='manage-grid-item-icon'>
                  <SecurityIcon style={{fontSize: '32px'}}/>
                </div>
                <div className='manage-grid-item-title'>
                  <h2>Security</h2>
                </div>
                <div className='manage-grid-item-description'>Manage my account security</div>
            </div>
            <div className="manage-grid-item">
                <div className='manage-grid-item-icon'>
                  <CartIcon style={{fontSize: '32px'}}/>
                </div>
                <div className='manage-grid-item-title'>
                  <h2>Orders</h2>
                </div>
                <div className='manage-grid-item-description'>Manage my orders</div>
            </div>
            <div className="manage-grid-item">
                <div className='manage-grid-item-icon'>
                  <ScanIcon style={{fontSize: '32px'}}/>
                </div>
                <div className='manage-grid-item-title'>
                  <h2>Redeem</h2>
                </div>
                <div className='manage-grid-item-description'>Redeem a game or product code</div>
            </div>
            <div className="manage-grid-item">
                <div className='manage-grid-item-icon'>
                  <FileIcon style={{fontSize: '32px'}}/>
                </div>
                <div className='manage-grid-item-title'>
                  <h2>My cases</h2>
                </div>
                <div className='manage-grid-item-description'>View open or past cases</div>
            </div>
            <div className="manage-grid-item">
                <div className='manage-grid-item-icon'>
                  <BanIcon style={{fontSize: '32px'}}/>
                </div>
                <div className='manage-grid-item-title'>
                  <h2>Ban history</h2>
                </div>
                <div className='manage-grid-item-description'>View current or past bans and suspensions </div>
            </div>
        </div>
    </div>
  )
}

export default ManageAccount