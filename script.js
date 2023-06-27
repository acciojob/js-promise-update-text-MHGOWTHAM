//your JS code here. If required.
function call(){
return new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("Hello, world!");
	},1000)
})
}

call().then((data)=>{
	const l=document.getElementById("output");
	l.innerText=data;
})
