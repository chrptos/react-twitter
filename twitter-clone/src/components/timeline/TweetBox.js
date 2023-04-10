import React from 'react';
import {Avatar, Button} from '@mui/material';
import './TweetBox.css';

function TweetBox() {
  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar />
                <input placeholder='今何してる？' />
            </div>
            <input className='tweetBox__imageInput' placeholder='画像のURLを入力してください' type='text'/>
            <Button className='tweetBox__tweetButton' type='submit'>ツイートする</Button>
        </form>
    </div>
  )
}

export default TweetBox