import React from 'react'

class Note extends React.Component {
  render () {
    const { note } = this.props;
    
    return (
      <div className="note-container">
        Note Component
      </div>
    );
  }
}

export default Note;