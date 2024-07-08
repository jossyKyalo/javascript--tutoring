//ES Module= An  external file that contains reusable code
//           that can be imported into other Javascript files.
//           Writes reusable code for many different apps.
//           Can contain variables, classes, fucntions ....and more
//           Introduced as part of ECMAScript 2015 update

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference= getCircumference(10);
const area=getArea(10);
const volume=getVolume(10);

console.log('${circumference.toFixed(2)}cm');
console.log('${area.toFixed(2)}cm^2');
console.log('${volume.toFixed(2)}cm^3');