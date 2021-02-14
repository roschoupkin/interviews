/**
 * Once upon a time, on a way through the old wild mountainous west,…
 *  … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
 * Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
 * How I crossed a mountainous desert the smart way.
 *
 * The directions given to the man are, for example, the following (depending on the language):
 * ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] or { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" } or [North, South, South, East, West, North, West]
 * You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
 * ["WEST"] or { "WEST" } or [West]
 *
 * Other examples:
 * In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
 * The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).
 * In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
 *
 * Notes:
 * Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
 * if you want to translate, please ask before translating.
 */

function dirReduc(arr){
  let directions = arr.join(' ');
  const regex = /(NORTH\s*SOUTH)|(EAST\s*WEST)|(SOUTH\s*NORTH)|(WEST\s*EAST)/gi
  while (regex.test(directions)) {
    directions = directions.replace(regex, '');
  }
  return directions.split(' ').filter(d => !!d);
}

function dirReduc2(plan) {
  const opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
    if (dirs[dirs.length - 1] === opposite[dir])
      dirs.pop();
    else
      dirs.push(dir);
    return dirs;
  }, []);
}

function dirReduc3(arr){
  const opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
  return arr.reduce(function (a, b, i) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
    return a
  }, [])
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]); // ["WEST"]
dirReduc2(["NORTH", "WEST", "SOUTH", "EAST"]); // ["NORTH", "WEST", "SOUTH", "EAST"]
dirReduc3(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]); // []
