/**
 * 1. 给定 csv ⽂件，转换成对象结构（注意: csv 中存在父子关系）
 *
 * interface Person {
 *  name: string;
 *  age: number;
 *  parent: Person[];
 *  children: Person[];
 *  }
 */
const csv = `
name,age,parent
Bob,30,David
David,60,
Anna,10,Bob
`;
class Person {
  constructor(personname, age) {
    this.name = personname;
    this.age = age;
    this.parent = [];
    this.chilren = [];
  }
}
function csv2Tree(csv) {
  let dataList = csv.split("\n");
  dataList = dataList.slice(2, dataList.length - 1);
  let [rootName, rootAge, rootParent] = dataList[0].split(",");
  let rootPerson = new Person(rootName, rootAge);
  for (let i = 1; i < dataList.length; i++) {
    let [nodeName, nodeAge, nodeParent] = dataList[i].split(",");
    // console.log(nodeName, nodeAge, nodeParent);
    let nodePerson = new Person(nodeName, nodeAge);
    if (nodeName === rootParent) {
        rootPerson.parent.push(nodePerson);
        nodePerson.chilren.push(rootPerson)
    }
    else if (nodeParent === rootName) {
        rootPerson.chilren.push(nodePerson);
        nodePerson.parent.push(rootPerson);
    }
  }
  return rootPerson;
}
console.log(csv2Tree(csv));
