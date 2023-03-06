
// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
export default function Blog({ posts }) {
    return (
      <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>Member{post.id} / {post.first_name} {post.last_name}</li>
        ))}
      </ul>
      </div>
    )
  }

  export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/dataset')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }