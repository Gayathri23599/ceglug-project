
let btn=document.getElementById('sub')



let inp1=document.getElementById('piz')
let inp2=document.getElementById('fry')
let inp3=document.getElementById('bur')
let inp4=document.getElementById('cake')




let list=document.getElementById('list')
btn.addEventListener('click',function(){

if(inp1.checked==true){
let item=document.createElement('li')

item.innerHTML=inp1.value
list.appendChild(item)}





if(inp2.checked==true){
let item=document.createElement('li')


item.innerHTML=inp2.value
list.appendChild(item)}
if(inp3.checked==true){
let item=document.createElement('li')
item.innerHTML=inp3.value
list.appendChild(item)}
if(inp4.checked==true){
let item=document.createElement('li')
item.innerHTML=inp4.value
list.appendChild(item)
}
}) 
