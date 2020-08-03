# spring-boot-and-react

## Commands

- to create react app `npx create-react-app NAME`
- to start the react app `npm start`

### notes
- Threre are 2 types of components in reacts *function* (for simple components) and *class* (for additional features needed, state), they have a slight different syntax.

```javascript
class FirstComponent extends Component{
  render(){
    return (
      <div>
      Fist Component
      </div>
    )
  }
}
```

```javascript
function FirstComponent(){
    return (
      <div>
      Fist Component
      </div>
    );
}
```

- The concept of `jsx` is that you can write html inside js files. `Babel` does this for us!
- `Babel` let's us write JS in the latest version and it converts it to the executable version of JS the browsers run.
- In `jsx` all nodes should be closed. `<br>` is a valid html but in jsx we should write `<br/>`. 
- Components should start with capital letters.
- Components should be wrapped in a container, if not `Babel` goes crazy.
- We need to use arrow functions in order to avoid bindings in the constructor `//this.increment = this.increment.bind(this);`.
- Define default values to props by using `ComponentName.defaultProps={jsonObject}`.
- Define default values to props types by using `ComponentName.propTypes={propName = PropTypes.type}` and import `import PropTypes from 'prop-types';`.


## Property names in React

- className to class
- onclick=someJSMethodCall()  to onClick={someJSMethodCall}

