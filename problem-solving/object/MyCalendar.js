
var MyCalendar = function () {
  this.events = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  // Check for overlap with existing events
  for (const [s, e] of this.events) {
    // No overlap condition: (new_end <= old_start) or (new_start >= old_end)
    if (!(end <= s || start >= e)) {
      return false;
    }
  }
  // If no overlap, add the event
  this.events.push([start, end]);
  return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */