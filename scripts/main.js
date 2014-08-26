/** @jsx React.DOM */

var clockMountNode = document.getElementById('clock');
if (clockMountNode) {
  React.renderComponent(
    <Clock />,
    clockMountNode
  );
}

var timeMountNode = document.getElementById('time');
if (timeMountNode) {
  React.renderComponent(
    <Time date={new Date()} />,
    timeMountNode
  );
}

var anotherClockMountNode = document.getElementById('another-clock');
if (anotherClockMountNode) {
  React.renderComponent(
    <AnotherClock />,
    anotherClockMountNode
  );
}


[].forEach.call(document.querySelectorAll('.analog-clock'), function(elem) {
  React.renderComponent(
    <AnalogClock />,
    elem
  );
});
