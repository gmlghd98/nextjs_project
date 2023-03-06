import { useRouter } from 'next/router'

export default function ReadMore() {
  const router = useRouter()

  return (
    <ul>
    &emsp;
    <button className=" bg-sky-200 font-bold" onClick={() => router.push('https://www.crunchbase.com/organization/text-com')}>
      Go Info on this tab
    </button>
    &emsp;
    <button className=" bg-sky-400 font-bold" onClick={() => window.open('https://www.crunchbase.com/organization/text-com', '_blank')}>
      Go Info on new tab
    </button>
    </ul>

  )
}