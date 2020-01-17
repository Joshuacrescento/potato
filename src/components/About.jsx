import React, {Component} from 'react';
import Sara from './Sara'

class About extends Component{
    
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { text: "Talk about myself", done: false },
        { text: "Answer some technical questions", done: true },
        { text: "Do an easy exercise", done: false },
        { text: "Fix a broken exercise", done: false }
      ]
    };
    this.showList = this.showList.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }
  showList() {
    return this.state.items.map((item, index) => {
      return (
        <React.Fragment>
          <li>
            <label>
              <input
                type="checkbox"
                readOnly
                checked={this.state.items[index].done}
              />
              <span className={this.state.items[index].done ? "done" : ""}>
                {this.state.items[index].text}
              </span>
            </label>
          </li>

          <Sara></Sara>
        </React.Fragment>
      );
    });
  }

  handleEvent() {
    let { items } = this.state;
    items[0].done === true
      ? items.map(item => {
          item.done = false;
        })
      : items.map(item => {
          item.done = true;
        });
    this.setState(items);
  }
  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <ol>{this.showList()}</ol>
        <button onClick={this.handleEvent}>ON</button>
      </div>
    );
  }
}

export default About;