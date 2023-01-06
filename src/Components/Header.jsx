import React from 'react'
import AccountIcon from './AccountIcon';
import CompareButton from './CompareButton';

const Header = () => {
  return (
    <div className="header">
      <div className="logo" style={{ display: 'flex' }}>
        <span style={{ display: 'block', marginRight: '6px', fontSize: '25px', cursor: 'pointer' }}>
          <u>Typing Test</u>
        </span>

        <CompareButton />
      </div>
      <div className="icons">
        {/* account icon */}
        <AccountIcon />
      </div>
    </div>
  )
}

export default Header