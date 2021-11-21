import React, { Component } from 'react'
import BandInput from '../components/BandInput.js'
import { connect } from 'react-redux'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => {
  console.log({ bands })
  return {
    bands,
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBand: (band) => dispatch({ type: 'ADD_BAND', band }),
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
