require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"OrientationEvents":[function(require,module,exports){

/*

Based with values documented in:

deviceorientation -> https://developer.mozilla.org/en-US/docs/Web/Events/deviceorientation
devicemotion - > https://developer.mozilla.org/en-US/docs/Web/Events/devicemotion
 */
var _motion, _orientation, filteredAlpha, filteredBeta, filteredGamma, filteredGravX, filteredGravY, filteredGravZ, filteredX, filteredY, filteredZ;

exports.orientation = null;

exports.motion = null;

exports.smoothOrientation = 1;

exports.smoothMotion = 1;

filteredAlpha = 0;

filteredBeta = 0;

filteredGamma = 0;

filteredX = 0;

filteredY = 0;

filteredZ = 0;

filteredGravX = 0;

filteredGravY = 0;

filteredGravZ = 0;

exports.OrientationEvents = function() {
  var events;
  return events = (function() {
    switch (false) {
      case !(window.DeviceOrientationEvent && !window.DeviceMotionEvent):
        window.addEventListener("deviceorientation", _orientation);
        return print("Device motion events are not support on this device.");
      case !(window.DeviceMotionEvent && !window.DeviceOrientationEvent):
        window.addEventListener("devicemotion", _motion);
        return print("Device orientation events are not suported on this device");
      case !(window.DeviceOrientationEvent && window.DeviceMotionEvent):
        window.addEventListener("deviceorientation", _orientation);
        return window.addEventListener("devicemotion", _motion);
      default:
        return console.warn('Device orientation and motion events are not support on this device.');
    }
  })();
};

_motion = function(event) {
  filteredX = (event.acceleration.x * exports.smoothMotion) + (filteredX * (1 - exports.smoothMotion));
  filteredY = (event.acceleration.y * exports.smoothMotion) + (filteredY * (1 - exports.smoothMotion));
  filteredZ = (event.acceleration.z * exports.smoothMotion) + (filteredZ * (1 - exports.smoothMotion));
  filteredGravX = (event.accelerationIncludingGravity.x * exports.smoothMotion) + (filteredGravX * (1 - exports.smoothMotion));
  filteredGravY = (event.accelerationIncludingGravity.y * exports.smoothMotion) + (filteredGravY * (1 - exports.smoothMotion));
  filteredGravZ = (event.accelerationIncludingGravity.z * exports.smoothMotion) + (filteredGravZ * (1 - exports.smoothMotion));
  exports.motion = {
    x: filteredX,
    y: filteredY,
    z: filteredZ,
    gravX: filteredGravX,
    gravY: filteredGravY,
    gravZ: filteredGravZ,
    rotationRate: event.rotationRate,
    interval: event.interval
  };
  if (typeof motion !== "undefined" && motion !== null) {
    return motion;
  }
};

_orientation = function(event) {
  filteredAlpha = (event.alpha * exports.smoothOrientation) + (filteredAlpha * (1 - exports.smoothOrientation));
  filteredBeta = (event.beta * exports.smoothOrientation) + (filteredBeta * (1 - exports.smoothOrientation));
  filteredGamma = (event.gamma * exports.smoothOrientation) + (filteredGamma * (1 - exports.smoothOrientation));
  exports.orientation = {
    alpha: filteredAlpha,
    beta: filteredBeta,
    gamma: filteredGamma,
    absolute: event.absolute
  };
  if (typeof orientation !== "undefined" && orientation !== null) {
    return orientation;
  }
};


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZW5vbHRlbi9Db2RlL1N1aXRzdXBwbHkvbWFya2V0aW5nLXRlY2hub2xvZ3ktcHJvdG90eXBlcy9fYXBwX2dscF92M2UuZnJhbWVyL21vZHVsZXMvT3JpZW50YXRpb25FdmVudHMuY29mZmVlIiwiL1VzZXJzL2Vub2x0ZW4vQ29kZS9TdWl0c3VwcGx5L21hcmtldGluZy10ZWNobm9sb2d5LXByb3RvdHlwZXMvX2FwcF9nbHBfdjNlLmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTs7Ozs7OztBQUFBLElBQUE7O0FBWUEsT0FBTyxDQUFDLFdBQVIsR0FBc0I7O0FBR3RCLE9BQU8sQ0FBQyxNQUFSLEdBQWlCOztBQUdqQixPQUFPLENBQUMsaUJBQVIsR0FBNEI7O0FBQzVCLE9BQU8sQ0FBQyxZQUFSLEdBQXVCOztBQUd2QixhQUFBLEdBQWdCOztBQUNoQixZQUFBLEdBQWU7O0FBQ2YsYUFBQSxHQUFnQjs7QUFHaEIsU0FBQSxHQUFZOztBQUNaLFNBQUEsR0FBWTs7QUFDWixTQUFBLEdBQVk7O0FBQ1osYUFBQSxHQUFnQjs7QUFDaEIsYUFBQSxHQUFnQjs7QUFDaEIsYUFBQSxHQUFnQjs7QUFJaEIsT0FBTyxDQUFDLGlCQUFSLEdBQTRCLFNBQUE7QUFDM0IsTUFBQTtTQUFBLE1BQUE7QUFBUyxZQUFBLEtBQUE7QUFBQSxhQUNILE1BQU0sQ0FBQyxzQkFBUCxJQUFpQyxDQUFFLE1BQU0sQ0FBQyxrQkFEdkM7UUFFUCxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsbUJBQXhCLEVBQTZDLFlBQTdDO2VBRUEsS0FBQSxDQUFNLHNEQUFOO0FBSk8sYUFLSCxNQUFNLENBQUMsaUJBQVAsSUFBNEIsQ0FBRSxNQUFNLENBQUMsdUJBTGxDO1FBTVAsTUFBTSxDQUFDLGdCQUFQLENB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LENBQUMsUUFIaEI7O0VBS0QsSUFBc0IsMERBQXRCO0FBQUEsV0FBTyxZQUFQOztBQVhjOzs7O0FDdkVmLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyMjXG5cbkJhc2VkIHdpdGggdmFsdWVzIGRvY3VtZW50ZWQgaW46XG5cbmRldmljZW9yaWVudGF0aW9uIC0+IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9kZXZpY2VvcmllbnRhdGlvblxuZGV2aWNlbW90aW9uIC0gPiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvZGV2aWNlbW90aW9uXG5cbiMjI1xuXG4jIOKAk+KAk+KAk+KAkyBWQVJJQUJMRVNcblxuIyBPcmllbnRhdGlvbiB2YWx1ZXNcbmV4cG9ydHMub3JpZW50YXRpb24gPSBudWxsXG5cbiMgTW90aW9uIFZhbHVlc1xuZXhwb3J0cy5tb3Rpb24gPSBudWxsXG5cbiMgVXNlZCBmb3Igc21vb3RoaW5nIG91dCBkYXRhIHZhbHVlc1xuZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbiA9IDFcbmV4cG9ydHMuc21vb3RoTW90aW9uID0gMVxuXG4jIEZpbHRlcmVkIHZhcmlhYmxlcyBmb3Igb3JpZW50YXRpb25cbmZpbHRlcmVkQWxwaGEgPSAwXG5maWx0ZXJlZEJldGEgPSAwXG5maWx0ZXJlZEdhbW1hID0gMFxuXG4jIEZpbHRlcmVkIHZhcmlhYmxlcyBmb3IgbW90aW9uXG5maWx0ZXJlZFggPSAwXG5maWx0ZXJlZFkgPSAwXG5maWx0ZXJlZFogPSAwXG5maWx0ZXJlZEdyYXZYID0gMFxuZmlsdGVyZWRHcmF2WSA9IDBcbmZpbHRlcmVkR3JhdlogPSAwXG5cbiMg4oCT4oCT4oCT4oCTIFBVQkxJQ1xuXG5leHBvcnRzLk9yaWVudGF0aW9uRXZlbnRzID0gLT5cblx0ZXZlbnRzID0gc3dpdGNoXG5cdFx0d2hlbiB3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudCAmJiAhKHdpbmRvdy5EZXZpY2VNb3Rpb25FdmVudClcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIFwiZGV2aWNlb3JpZW50YXRpb25cIiwgX29yaWVudGF0aW9uXG5cblx0XHRcdHByaW50IFwiRGV2aWNlIG1vdGlvbiBldmVudHMgYXJlIG5vdCBzdXBwb3J0IG9uIHRoaXMgZGV2aWNlLlwiXG5cdFx0d2hlbiB3aW5kb3cuRGV2aWNlTW90aW9uRXZlbnQgJiYgISh3aW5kb3cuRGV2aWNlT3JpZW50YXRpb25FdmVudClcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIFwiZGV2aWNlbW90aW9uXCIsIF9tb3Rpb25cblxuXHRcdFx0cHJpbnQgXCJEZXZpY2Ugb3JpZW50YXRpb24gZXZlbnRzIGFyZSBub3Qgc3Vwb3J0ZWQgb24gdGhpcyBkZXZpY2VcIlxuXHRcdHdoZW4gd2luZG93LkRldmljZU9yaWVudGF0aW9uRXZlbnQgJiYgd2luZG93LkRldmljZU1vdGlvbkV2ZW50XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciBcImRldmljZW9yaWVudGF0aW9uXCIsIF9vcmllbnRhdGlvblxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIgXCJkZXZpY2Vtb3Rpb25cIiwgX21vdGlvblxuXHRcdGVsc2UgXG5cdFx0XHRjb25zb2xlLndhcm4oJ0RldmljZSBvcmllbnRhdGlvbiBhbmQgbW90aW9uIGV2ZW50cyBhcmUgbm90IHN1cHBvcnQgb24gdGhpcyBkZXZpY2UuJylcblxuIyDigJPigJPigJPigJMgUFJJVkFURVxuXG5fbW90aW9uID0gKGV2ZW50KSAtPlxuXHRmaWx0ZXJlZFggPSAoZXZlbnQuYWNjZWxlcmF0aW9uLnggKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRYICogKDEtZXhwb3J0cy5zbW9vdGhNb3Rpb24pKVxuXHRmaWx0ZXJlZFkgPSAoZXZlbnQuYWNjZWxlcmF0aW9uLnkgKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRZICogKDEtZXhwb3J0cy5zbW9vdGhNb3Rpb24pKVxuXHRmaWx0ZXJlZFogPSAoZXZlbnQuYWNjZWxlcmF0aW9uLnogKiBleHBvcnRzLnNtb290aE1vdGlvbikgKyAoZmlsdGVyZWRaICogKDEtZXhwb3J0cy5zbW9vdGhNb3Rpb24pKVxuXG5cdGZpbHRlcmVkR3JhdlggPSAoZXZlbnQuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS54ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkR3JhdlggKiAoMS1leHBvcnRzLnNtb290aE1vdGlvbikpXG5cdGZpbHRlcmVkR3JhdlkgPSAoZXZlbnQuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS55ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkR3JhdlkgKiAoMS1leHBvcnRzLnNtb290aE1vdGlvbikpXG5cdGZpbHRlcmVkR3JhdlogPSAoZXZlbnQuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS56ICogZXhwb3J0cy5zbW9vdGhNb3Rpb24pICsgKGZpbHRlcmVkR3JhdlogKiAoMS1leHBvcnRzLnNtb290aE1vdGlvbikpXG5cblx0ZXhwb3J0cy5tb3Rpb24gPSBcblx0XHR4OiBmaWx0ZXJlZFhcblx0XHR5OiBmaWx0ZXJlZFlcblx0XHR6OiBmaWx0ZXJlZFpcblx0XHRncmF2WDogZmlsdGVyZWRHcmF2WFxuXHRcdGdyYXZZOiBmaWx0ZXJlZEdyYXZZXG5cdFx0Z3Jhdlo6IGZpbHRlcmVkR3Jhdlpcblx0XHRyb3RhdGlvblJhdGU6IGV2ZW50LnJvdGF0aW9uUmF0ZVxuXHRcdGludGVydmFsOiBldmVudC5pbnRlcnZhbFxuXG5cdHJldHVybiBtb3Rpb24gaWYgbW90aW9uP1xuXG5fb3JpZW50YXRpb24gPSAoZXZlbnQpIC0+XG5cdGZpbHRlcmVkQWxwaGEgPSAoZXZlbnQuYWxwaGEgKiBleHBvcnRzLnNtb290aE9yaWVudGF0aW9uKSArIChmaWx0ZXJlZEFscGhhICogKDEtIGV4cG9ydHMuc21vb3RoT3JpZW50YXRpb24pKVxuXHRmaWx0ZXJlZEJldGEgPSAoZXZlbnQuYmV0YSAqIGV4cG9ydHMuc21vb3RoT3JpZW50YXRpb24pICsgKGZpbHRlcmVkQmV0YSAqICgxLSBleHBvcnRzLnNtb290aE9yaWVudGF0aW9uKSlcblx0ZmlsdGVyZWRHYW1tYSA9IChldmVudC5nYW1tYSAqIGV4cG9ydHMuc21vb3RoT3JpZW50YXRpb24pICsgKGZpbHRlcmVkR2FtbWEgKiAoMS0gZXhwb3J0cy5zbW9vdGhPcmllbnRhdGlvbikpXG5cblx0ZXhwb3J0cy5vcmllbnRhdGlvbiA9IFxuXHRcdGFscGhhOiBmaWx0ZXJlZEFscGhhXG5cdFx0YmV0YTogZmlsdGVyZWRCZXRhXG5cdFx0Z2FtbWE6IGZpbHRlcmVkR2FtbWFcblx0XHRhYnNvbHV0ZTogZXZlbnQuYWJzb2x1dGVcblxuXHRyZXR1cm4gb3JpZW50YXRpb24gaWYgb3JpZW50YXRpb24/XG5cbiIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iXX0=
