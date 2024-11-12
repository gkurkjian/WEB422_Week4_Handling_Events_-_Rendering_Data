import { useState, useEffect } from "react";

export default function FetchPostWithUseStateUseEffect(props) {

    const [ post, setPost ] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/2`).then((res) => res.json()).then(data => {
            setPost(data)
        })
        console.log('Here\'s 4.PostData.js component');
    }, [])

    if(post) {
        return(
            <>
                <h1>4.PostData.js</h1>
                <strong>UserID: </strong>{post?.userId}<br />
                <strong>Title: </strong>{post?.title}<br />
                <strong>Body: </strong>{post?.body}<br />
            </>
        )
    }
}