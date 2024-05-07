import React from 'react'
// import state from "../../Data/state"

import style from "./Posts.module.css"
import Post from "./post/Post"





function Posts(props) {

    return (
        <div className={style.posts}>
            <h2>My posts</h2>
            <input placeholder='enter the post' />
            <button>Add post</button>
            {/* <Post messages="hi" name="masc"/>
<Post messages="hui"/>
<Post messages="bn"/> */}
            {props.postsData.map((e) => <Post messages={e.text} id={e.id} likes={e.likes} />)}

        </div>
    )
}
export default Posts
