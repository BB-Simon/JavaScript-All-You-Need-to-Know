
var MyCalendarTwo = function () {
  this.cal = [];
  this.intrscs = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  // Check for overlaps in the intersections
  for (const [is, ie] of this.intrscs) {
    if (start < ie && end > is) {
      return false; // Triple booking detected
    }
  }

  // Check for overlaps in the calendar and add to intersections if needed
  for (const [cs, ce] of this.cal) {
    if (start < ce && end > cs) {
      const intersectionStart = Math.max(cs, start);
      const intersectionEnd = Math.min(ce, end);
      this.intrscs.push([intersectionStart, intersectionEnd]);
    }
  }

  // Add the event to the calendar
  this.cal.push([start, end]);
  return true;
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */