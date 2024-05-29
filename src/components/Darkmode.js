import React, { Component } from 'react'

export class Darkmode extends Component {
  render() {
    return (
      <div>
        <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label text-light" for="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    )
  }
}

export default Darkmode
