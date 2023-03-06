export default function Home({data}) {
  return (
    <div>
      <h className='text-7xl font-bold underline'>Welcome to my homepage</h>
      <p className='text-5xl'>This is for TEST</p>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/dataset')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data }, 
  }
}
