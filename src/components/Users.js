import React, {Component} from 'react'
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user =>
            <li key={user.username}>{user.username}</li>
          )}
          <br/>
          {this.props.users.length} 
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
