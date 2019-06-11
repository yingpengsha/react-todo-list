import React, { Component } from 'react';
import {connect} from 'react-redux';

class TodoList extends Component {

  render() {
    const {inputValue} = this.props

    return (
      <div>
        <div>
          <input value = {inputValue} onChange={this.handleInputChange}/>
          <button>提交</button>
        </div>
        <ul>
          <li>123</li>
        </ul>
      </div>
    );
  }

  handleInputChange=(e)=>{
    console.log(e.target.value)
  }
}

const mapStateToProps = (state) => ({
  inputValue:state.inputValue
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);