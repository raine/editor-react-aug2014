/** @jsx React.DOM */
var Clock = React.createClass({
  getInitialState: function() {
    return { date: new Date() };
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  tick: function() {
    this.setState({
      date: new Date()
    });
  },
  render: function() {
    return <Time date={this.state.date} />
  }
});
