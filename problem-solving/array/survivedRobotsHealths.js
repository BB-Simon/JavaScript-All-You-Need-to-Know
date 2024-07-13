/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function (positions, healths, directions) {
  const robots = positions.map((p, index) => {
    return {
      index,
      position: p,
      health: healths[index],
      direction: directions[index],
    }
  });
  robots.sort((a, b) => a.position - b.position)

  let stack = [];
  for (let robot of robots) {
    if (robot.direction === "R") {
      stack.push(robot)
      continue
    }

    let gone = false;
    while (stack[stack.length - 1]?.health <= robot.health && stack[stack.length - 1]?.direction === "R") {
      if (stack[stack.length - 1].health === robot.health) {
        stack.pop();
        gone = true;
        break
      }

      robot.health -= 1;
      stack.pop();
    }

    if (!gone && stack[stack.length - 1]?.direction === "R" && stack[stack.length - 1]?.health > robot.health) {
      stack[stack.length - 1].health -= 1;
      gone = true;
    }

    if (!gone) {
      stack.push(robot)
    }
  }


  stack.sort((a, b) => a.index - b.index)
  return stack.map(s => s.health);
};