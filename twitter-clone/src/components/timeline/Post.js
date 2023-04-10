import React from 'react'
import { Avatar } from '@mui/material'
import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material';
import "./Post.css";

function Post() {
  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__header__text">
                    <h3>
                        プログラミングチュートリアル
                        <span className="post__header__special">
                            <VerifiedUser className="post__badge" />
                            @Engineer
                        </span>
                    </h3>
                </div>
                <div className="post__header__description">
                    <p>Reactなう</p>
                </div>
            </div>
            <img src="https://source.unsplash.com/random/" />
            <div className="post__footer">
                <ChatBubbleOutline fontSize='small' />
                <Repeat fontSize='small' />
                <FavoriteBorder fontSize='small' />
                <PublishOutlined fontSize='small' />
            </div>
        </div>
    </div>
  )
}

export default Post