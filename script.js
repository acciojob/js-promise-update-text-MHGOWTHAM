//your JS code here. If required.
function call(){
return new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("Hello, World!");
	},1000)
})
}

call().then((data)=>{
	const l=document.getElementById("output");
	l.innerText=data;
})
