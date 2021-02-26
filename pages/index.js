import Head from 'next/head'
import Searchbar from '../components/Searchbar'
import Post from '../components/Post'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-gray-500">
        <Searchbar />
        <div className="flex mx-auto -my-0 w-11/12">
          <div className=" flex w-8/12 flex-col  mr-4">
            <Post />
            <Post />
          </div>
          <div className=" flex justify-center w-4/12">
            <Categories />
          </div>
        </div>
      </main>
      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  )
}
