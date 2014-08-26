/** @jsx React.DOM */
var Time = React.createClass({
  render: function() {
    return <span>{this.props.date.toLocaleTimeString()}</span>
  }
});

var FormattedTime = React.createClass({
  render: function() {
    return <span>
      {this.props.date['to' + this.props.format]()}
    </span>
  }
});

var ClockFace = React.createClass({
  render: function() {
    var d = this.props.date;
    var millis = d.getMilliseconds();
    var second = d.getSeconds() * 6 + millis * (6 / 1000);
    var minute = d.getMinutes() * 6 + second / 60;
    var hour = ((d.getHours() % 12) / 12) * 360 + 90 + minute / 12;

    return (
      <div className="circle">
        <div className="face">
          <div className="second" style={transform(rotate(second))} />
          <div className="hour" style={transform(rotate(hour))} />
          <div className="minute" style={transform(rotate(minute))} />
        </div>
      </div>
    );
  }
});

function transform(str) {
  return { transform: str };
}

function rotate(deg) {
  return 'rotate(' + deg + 'deg)';
}
