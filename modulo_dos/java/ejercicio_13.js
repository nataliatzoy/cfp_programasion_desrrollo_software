var SCRIPTS = [
    {
      name: "Adlam",
      ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
      direction: "rtl",
      year: 1987,
      living: true,
      link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
    },
]
  
function characterScript(code) {
    for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
    return code >= from && code < to;
    })) {
    return script;
    }
    }
    return null;
    }
  
function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
        counts.push({name, count: 1});
    } else {
        counts[known].count++;
    }
    }
    return counts;
}
  
function dominantDirection(text) {
    let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    if (counted.length == 0) return "ltr";

    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
    
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));