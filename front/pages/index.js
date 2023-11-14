import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useState } from "react";
import Image from "next/image";
import NavBar from "../components/navbar"
import { useRouter } from 'next/router';
import {Input} from 'antd';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  async function handleSearch() {
    if (searchValue == "") {
      return;
    }
    router.push({
      pathname: '/Search',
      query: { searchFromHome: searchValue }
  }, '/Search');
  }

  const {Search} = Input;

  return (
    <div>
      <div className={styles.header}>
        <Head>
          <title>Incognito</title>
          <NavBar></NavBar>
        </Head>
      </div>
      <div className={styles.container}>
        <main>
          <div className={styles.lg_bar}>
            <Image alt="Logo" src="/logo.png" width={500} height={500}/>
            <Search
              className={styles.search_bar}
              placeholder="search the web untracked"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onSearch={handleSearch}
              size="large"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
