import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/button'
import useDtwitter from '../hooks/useDtwitter'

const Home: NextPage = () => {
  const {connectWallet, currentAccount} = useDtwitter()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dtwitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-orange-700">Dtwitter</span>
        </h1>

{!currentAccount ?     <Button 
          label= "Connect with Ethereum" 
          onClick= {()=>{connectWallet()}}
        />: <p className="text-red-500">Connected to {currentAccount}</p>}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Powered by Ethereum
      </footer>
    </div>
  )
}

export default Home
