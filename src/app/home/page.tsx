'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [show, setShow] = useState(false);
  return (
  <main className={styles.main}>
    <button onClick={() => setShow(prev => !prev)} data-testid="btn">click</button>
    {show && <p data-testid="text">ququ</p>}
  </main>
  );
}
