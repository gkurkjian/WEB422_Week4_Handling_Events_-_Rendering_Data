export default function PostDataStatic(props) {
    console.log("Here\'s 7.PostDataStatic.js")
    return (
        <>

        <h1>7.PostDataStatic.js Component</h1>
        <p>In this component there&apos;s no function to fetch from &apos;URL&apos;. In home page in index.js we used getStaticProps(props) function to fetch data</p>
        <p>We used getStaticProps by using Promise and Using async method on pre render time</p>
        <p>This is now using async method, if you wish to use Promise method, simply comment the async functionality from index.js</p>

        <strong>User ID:</strong> {props.post?.userId}<br />
        <strong>Title:</strong> {props.post?.title}<br />
        <strong>Body:</strong> {props.post?.body}<br />
        </>
    );
}