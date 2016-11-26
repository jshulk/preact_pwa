import {h} from 'preact';
import {Link} from 'preact-router';
export default () => {
  return (
    <header style={styles.container}>
      <h1>Preact Demo</h1>
      <nav>
        <Link style={styles.link} href="/">Home</Link>
        <Link style={styles.link} href="/about">About</Link>
      </nav>
    </header>
  )
}

const styles = {
  container: {
    background: '#1e1e61',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  link: {
    color: '#fff',
    display: "inline-block",
    margin: 10,
    textDecoration: "none"
  }
}
