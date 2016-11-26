import {h, Component} from 'preact';
import List from 'components/List';
import {fetchEmojis} from 'services/dataLayer';
export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      items: [],
      value: ""
    }
  }
  renderItem(item){
    return (
      <div style={styles.itemContainer}>
        <span style={styles.itemText}>{item.text}</span>
        <span style={styles.itemScore}>{item.score}</span>
      </div>
    )
  }
  onInput(evt){
    const value = evt.target.value;
    this.setState({
      value
    });
    fetchEmojis(value)
    .then(items => this.setState({items}))
  }
  render({}, {items, value}){
    return (
      <div>
        <input
          style={styles.input}
          placeholder="Search..."
          value={value}
          onInput={this.onInput.bind(this)}/>
        <List items={items} renderItem={this.renderItem.bind(this)}/>
      </div>
    );
  }

}

const styles = {
  input: {
    width: '100vw',
    height: 60,
    padding: 20,
    fontSize: '1.2em'
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}
