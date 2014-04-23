function listAllProperties(x){     
	var m=[];
	for(var e=x,o=Object,p=o.getPrototypeOf,n=o.getOwnPropertyNames; e !== null; e=p(e)){  
		m=m.concat(n(e));  
	};
	return m; 
};
//
console.clear();
console.dir(listAllProperties(window).join());

console.log(Object.getPrototypeOf);//function getPrototypeOf() { [native code] }
Object.getPrototypeOf=2;
console.log(Object.getPrototypeOf);//2
console.log(Object.prototype.getPrototypeOf);//undefined 
