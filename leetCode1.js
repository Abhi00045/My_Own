let s="abbacaacda";
let stack=[];
for(let i=0;i<s.length;i++){
    if(stack.length===0 || s[i] != stack[stack.length-1]){
        stack.push(s[i]);
    }else stack.pop();
}
// stack.join("");
console.log(stack);
