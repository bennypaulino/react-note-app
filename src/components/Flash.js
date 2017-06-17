import React from 'react';

class Flash extends React.Component {

  componentDidMount() {
    let el = document.querySelector('.flash-container');
    el.classList.add('fade');
    setTimeout(() => {
      this.props.resetError();
    }, 4000);
  }

  render () {
    const { error } = this.props;

    return (
      <div className="flash-container">
        { error }
      </div>
    );
  }
}

export default Flash;