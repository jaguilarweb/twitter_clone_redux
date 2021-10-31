import React, { Component } from 'react'
import { connect } from 'react-redux'
//We need to get access to dispatch so we can connect 
//this component
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component {
  state = {
    text: '',
    toHome: false,
  }

  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state
    // todo: Add Tweet to Store
    const { dispatch, id } = this.props

    //In the argument, if we send an id
    // it is meaning we are replaying the tweet
    // and if it is not it is just a new tweet
    dispatch(handleAddTweet(text, id))

    this.setState(() => ({
      text: '',
      toHome: id ? false : true,
    }))
  }

  render(){
    const {text, toHome} = this.state

    {/* todo: Redirect to / if submited */}
    if (toHome === true){
      return <Redirect to='/' />
    }

    const tweetLeft = 280 - text.length

    return(
      <div>
        <h3 className='center'>Compose New Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea 
            placeholder="What's happening"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetLeft <= 100 && (
            <div className='tweet-lenght'>
              {tweetLeft}
            </div>
          )}
          <button
            className='btn'
            type='submit'
            disabled={text === ''}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

//This connect will give us access to dispatch
export default connect()(NewTweet)