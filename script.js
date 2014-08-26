/** @jsx React.DOM */

var ClockFace = React.createClass({
  render: function() {
    return <ClockFace date={this.state.date} />
  }
});

var AnalogClock = React.createClass({
  getInitialState: function() {
    return { date: new Date() };
  },
  componentDidMount: function() {
    this.start();
  },
  start: function() {
    var self = this;
    (function tick() {
      self.setState({ date: new Date() });
      requestAnimationFrame(tick);
    }());
  },
  render: function() {
    return <ClockFace date={this.state.date} />
  }
});
