let myleads=[];
let leads=JSON.parse(localStorage.getItem("myLeads"))
// myleads=JSON.parse(myleads)
console.log(leads)
const deletebtn=document.getElementById("delete-btn")
// console.log(typeof myleads)
// myleads=JSON.stringify(myleads)
// console.log(typeof myleads)
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("button-btn")
const ulEl=document.getElementById("ul-el")
const liEl=document.getElementById("li-el")
const tabEl=document.getElementById("tab-btn");
// const tabs=[
//     {url:"google.com"}
// ]
tabEl.addEventListener("click",function()
{
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        // console.log(tabs)
        // let activeTab = tabs[0];
        // let activeTabId = activeTab.id; // or do whatever you need
        myleads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myleads))
        renderLeads(myleads)
      })
})
// localStorage.setItem("myleads","www.instagram.com")
// console.log(localStorage.getItem("myLeads"))
// renderLeads()
deletebtn.addEventListener("dblclick",function()
{
    localStorage.clear()
    myleads=[]
    renderLeads(myleads)
    console.log("Double clicked")
})
if(leads)
{
    myleads=leads
    renderLeads(myleads)
}
inputBtn.addEventListener("click",function()
{
    console.log("Button clicked")
    myleads.push(inputEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myleads))
    // console.log(myleads)
    // console.log(ulEl)
    console.log(localStorage.getItem("myLeads"))
    renderLeads(myleads)

})
function renderLeads(leads1)
{
    let listitems=""
for(var i=0;i<leads1.length;i++)
{
    // console.log(myleads[i])
    // ulEl.innerHTML+="<li>"+myleads[i]+"</li>"
    //create the element
    //set text content
    //append to ul
    // const li=document.createElement('li')
    // li.textContent=myleads[i];
    // ulEl.append(li)
    // listitems+="<li><a target='_blank' href='"+myleads[i]+"'>"+myleads[i]+"</a></li>"
    // console.log(listitems)
    //template strings...! here we would use the single codes so that it can break the html into an easirer way
    listitems+=`<li>
    <a target='_blank' href='${leads1[i]}'>${leads1[i]}</a>
               </li>`
} 
// ulEl.innerHTML=""
inputEl.value=""
ulEl.innerHTML=listitems
// console.log(listitems)
}
//JSON.stringify() is used to convert the array to the string
//JSON.parse() is used to conver to the arr