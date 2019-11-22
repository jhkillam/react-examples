

class FruitsFormWithState extends React.Component {
  state = {
    fruits: []
  }
  render() {

    return (<div className="container">
      <h2>Fruits Inventory</h2>
      <ul>{
        this.state.fruits.map((fruit, index) => {
          return (<li key={index}>
            <p>{fruit.name} is {fruit.isGood? 'good': 'not good'}</p>
          </li>)
        })
      }</ul>
      <h2>Fruits Form</h2>
      <form>
        <div className="form-group">
          <label>Fruit Name</label>
          <input type="text" name="fruit-name"/>
        </div>
        <div className="form-group">
          <label>Do we like it?</label>
          <input type="checkbox" name="is-good"/>
        </div>
        <button type="submit">Add!</button>
      </form>
    </div>)
  }
}

class MyNameFormWithState extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    people: []
  }
  handleInputChange = (changeEvent) => {
    // console.log(changeEvent.target.value)
    this.setState({
      [changeEvent.target.name]: changeEvent.target.value
    })
  }
  handleFormSubmit = (submitEvent) => {
    submitEvent.preventDefault()
    const newPeople = [...this.state.people]
    newPeople.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
    this.setState({
      people: newPeople
    })
  }
  render() {
    return (
    <div className="container">
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName"
            onChange={this.handleInputChange}
            value={this.state.firstName}/>
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName"
            onChange={this.handleInputChange}
            value={this.state.lastName}
          />
        </div>
        <button type="submit">Save!</button>
        </form>
        <h1>This is the state</h1>
        <pre><code>{JSON.stringify(this.state)}</code></pre>
        <ul>
          {this.state.people.map((person, index) => {
            return (
            <li key={index}>
              {person.firstName} {person.lastName}
            </li>
            )})
          }
        </ul>
    </div>)
  }
}

const App = function() {
  return <div>
    <h1>Hello!</h1>
    <MyNameFormWithState/>
  </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))