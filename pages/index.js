import Head from 'next/head'
import Image from 'next/image'
import Layout from '../comps/Layout'

import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <p>This is a memory palace game</p>

      <Layout href="/cards">
         <a>See all cards</a>

      </Layout>
    
    </div>
  )
}
