import { useRouter } from 'next/router'

export default function ReadMore() {
  const router = useRouter()

  return (
    <>
    &emsp;
    <button className=" bg-sky-300 font-bold" onClick={() => router.push('https://www.crunchbase.com/organization/text-com')}>
      Go Info
    </button>
    </>

  )
}