import {h} from 'preact';
export default ({items, renderItem}) => {
  return (
    <ul style={styles.container}>
      {items.map((item) => {
        return <li>{renderItem(item)}</li>
      })}
    </ul>
  )
}
const styles = {
  container: {
    listStyle: 'none'
  }
};
