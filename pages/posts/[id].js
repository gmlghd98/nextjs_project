// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
export default function Post({ post }) {
    return (
      <div>
        <p>id : {post.id}</p>
        <p>Name : {post.name}</p>
        <p>Email : {post.email}</p>
        <p>Address : {post.address.street} {post.address.suite}, {post.address.city} {post.address.zipcode}</p>
        <p>Phone : {post.phone}</p>
      </div>
      
    )
  }

  export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const post = await res.json()
  
    // Pass post data to the page via props
    return { props: { post } }
  }