/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
  const CHAR_COUNT = 26;
  const INF = Infinity;

  function buildConversionGraph(original, changed, cost) {
    const graph = Array.from({ length: CHAR_COUNT }, () => Array(CHAR_COUNT).fill(INF));
    for (let i = 0; i < CHAR_COUNT; i++) {
      graph[i][i] = 0;
    }
    for (let i = 0; i < cost.length; i++) {
      const fromChar = original[i].charCodeAt(0) - 'a'.charCodeAt(0);
      const toChar = changed[i].charCodeAt(0) - 'a'.charCodeAt(0);
      graph[fromChar][toChar] = Math.min(graph[fromChar][toChar], cost[i]);
    }
    return graph;
  }

  function optimizeConversionPaths(graph) {
    for (let k = 0; k < CHAR_COUNT; k++) {
      for (let i = 0; i < CHAR_COUNT; i++) {
        if (graph[i][k] < INF) {
          for (let j = 0; j < CHAR_COUNT; j++) {
            if (graph[k][j] < INF) {
              graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
          }
        }
      }
    }
  }

  function computeTotalConversionCost(source, target, graph) {
    let totalCost = 0;
    for (let i = 0; i < source.length; i++) {
      const sourceChar = source.charCodeAt(i) - 'a'.charCodeAt(0);
      const targetChar = target.charCodeAt(i) - 'a'.charCodeAt(0);
      if (sourceChar !== targetChar) {
        if (graph[sourceChar][targetChar] === INF) {
          return -1;
        }
        totalCost += graph[sourceChar][targetChar];
      }
    }
    return totalCost;
  }

  const conversionGraph = buildConversionGraph(original, changed, cost);
  optimizeConversionPaths(conversionGraph);
  return computeTotalConversionCost(source, target, conversionGraph);
};