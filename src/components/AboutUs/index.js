import Link from 'next/link'
export default function AboutUs({title, arr}) {
  return (
    <div>
        <h3 className="font-bold text-[20px] mb-[20px]">{title}</h3>
        <ul className="grid gap-[21px]">
            {
                arr.map((item) =>{
                    return (
                    <li key = {item}>
                        <Link href="/">
                            <a className="hover:text-3rd-text duration-500">{item}</a>
                        </Link>
                    </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
