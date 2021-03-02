import Head from 'next/head'
import Searchbar from '../components/Searchbar'
import Categories from '../components/Categories'
import PostsFeed from '../redux/features/posts/PostsFeed'

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-gray-500">
        <Searchbar /> {/* Search top bar */}
        <div className="sm:flex mx-auto -my-0 w-11/12"> {/* Main content*/}
          <div className="flex sm:w-8/12 flex-col  mr-4 w-full"> {/*Left Column*/}
            <PostsFeed/>
          </div>
          <div className=" flex justify-center sm:w-4/12 w-full"> {/*Right Column*/}
            <Categories />
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t mt-4">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Yoann{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
