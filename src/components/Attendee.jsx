import React from 'react';

export default class Attendee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: this.props.guests,
      confirmed: this.props.confirmed,
      name: this.props.name,
      edit: false,
      idx: this.props.idx,
    }
  }

  handleChange(e) {
    this.setState({guests: e.target.value});
    this.props.handleSubmit(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleEdit(e) {
    this.setState({name: e.target.value})
  }

  handleConfirmChange() {
    this.setState({confirmed: !this.state.confirmed})
  }


  render() {
    const editForm = () => {
      return (
        <div className="editInput" >
          <input 
          type="text" 
          value={this.state.name} 
          onChange={val => this.handleEdit(val)}
          />
          <div className="buttonContainer">
            <button onClick={() => this.props.handleSubmit(this.state.idx, this.state)}>
            Done
            </button>
          </div>
        </div>
      )
    }
    return (
      <div className="attendee">
        <h1 className="cardText">{this.state.edit ? editForm() : this.state.name}</h1>
        <div className="confirmedText">
          <h4>Confirmed: </h4>
          <input 
          checked={this.state.confirmed} 
          onChange={() => this.handleConfirmChange()}
          type="checkbox"
          />
        </div>
        <div className="cardForm">
            Guests
            <br />
            <select className="edit" value={this.state.guests} onChange={(e) => this.handleChange(e)}>
              <option selected value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </div>
        <div className="editButtonContainer" >
          <button onClick={() => this.setState({edit: !this.state.edit})}>
            {!this.state.edit ? 'Edit' : 'Done'}
          </button>
          <button onClick={() => this.props.removeItem(this.state.Idx)} >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
