# React Hooks
## UseStates
#### If we are making use of functional components, then we should use React Hooks.
### How to use it?
#### Intialize a constants. Like at begining, intialize a default value to be used << const [contacts, setContacts] = useState([]) >>. Contacts are now functional thing inside a component. So, at intial stage, contacts will be an empty array. That is contacts value is which is present inside the useState function.

##### Main things to work on: declaring using useState [intializing value] | decalring a state [variables to catch the value] | making onChange [to trigger state]

### Working Things

```
state = {
  name:"",
  email:""
}
render() {
  return (
    <form onSubmit={this.submitFunc}>
      <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
      <input type="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
      <button type="submit">Submit</button>
    </form>
  )
}
submitFunc = (e) => {
  e.preventDefault(); /* This is used to prevent the refreshing of page. */
  console.log(this.state.name, this.state.email); /* Work with data. */
  /* After working with data, I should take back the state to intial state. So, I use the following. */
  this.setState({name:"",email:""});
  /* Now my states are cleared. */
}
```
