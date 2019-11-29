import React , { Component } from 'react';
import Button from './Button';
export default class  App extends Component {
 constructor ( ) {
   super( );
   this.state = {
     count : 0
   }
 }
incrementCount = ( ) => {
  this.setState({
    count: this.state.count+1
  })
}
decrementCount = ( ) => {
  this.setState({
    count:this.state.count-1
  })
}
multiplyCount = ( ) => {
  this.setState({
    count : this.state.count * this.state.count
  })
}
dividedCount = ( ) => {
  this.setState({
    count:this.state.count % this.state.count
  })
}
render ( ) {
  let { count } = this.state
  return (
    <div>
         <h2> Count: { count } </h2>
            <Button
                  title = { "+" }
                  task = { ( ) => this.incrementCount( ) }
              />
             <Button
                   title = { "-" }
                   task = { ( ) => this.decrementCount( )}
              />
              <Button
                  title = { "*" }
                  task = { ( ) => this.multiplyCount( )}
                  />
                  <Button
                    title = { " % " }
                    task = { ( ) => this.dividedCount( )}
                    />
    </div>
  );
}

}
