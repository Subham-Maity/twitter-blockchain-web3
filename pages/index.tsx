import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
const style = {

  wrapper: `flex justify-center h-screen w-scren select-none bg-[#15202b] text-white`,//bg-gray-900 text-white this is being used in the index.tsx file
  content:  `max-w-[1400px] w-2/3 flex justify-between`,//this is because the image is wider than the content and the content is centered
}




const Home: NextPage = () => {
  return (
    <div className={style.wrapper}> {/*this is style.wrapper which helps to wrap the theme of the twitter  */}
      <h2>Sidebar</h2>
      <h2>Feed</h2>
      <h2>Widgets</h2>
    </div>
  )
}

export default Home
