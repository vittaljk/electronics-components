import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Demo from '../common/components/Demo'

export default function Home() {
  return (
    <div className={styles.container}>
      <Demo />
    </div>
  )
}

export async function  getStaticProps() {
  // const res = await fetch('http://localhost:1337/api/categories');
  // const data = await res.json();

  // console.log('data', data);

  return {
    props: { }
  }
}