import React from 'react';

class Nav extends React.Component {
  render () {
    return (
      <div className="nav-container">
        <div className="nav-logo">Note</div>
        <div className="nav-button">
          <em>+ Note</em>
        </div>
      </div>
    );
  }
}

export default Nav;