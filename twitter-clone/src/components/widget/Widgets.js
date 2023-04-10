import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import { Search } from '@mui/icons-material';
import "./Widgets.css";

function widgets() {
  return (
    <div className='widgets'>
        <div className="widgets__input">
            <Search className='widgets__search__icon'/>
            <input type="text" placeholder="キーワードを検索" />
        </div>
        <div className="widgets__container">
            <h2>今どうしてる</h2>
            {/* ライブラリ追加 */}
            <TwitterTweetEmbed
                tweetId={'xxx'}
            />
            <TwitterTimelineEmbed
                sourceType="xxx"
                screenName="saurabhnemade"
                options={{height: 400}}
            />
            <TwitterShareButton
                url={'https://twitter.com/xxx'}
                options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
            />
        </div>
    </div>
  )
}

export default widgets