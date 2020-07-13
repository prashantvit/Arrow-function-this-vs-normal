window.x = 5;
const t = {
x: 1,
sf: function() {

console.log(this.x);
},
af : () => {

console.log(this.x);
}
}

const p = t.sf
const n = t.af

