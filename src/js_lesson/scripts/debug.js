const people=[
    {name:"john",cool:"true",country:"canada"},
    {name:"john",cool:"true",country:"USA"},
    {name:"Jimmy",cool:"false",country:"Kerala"},


];
people.forEach((person,index)=>{
    console.table(index,person.name,person.cool,person.country)
})
function certify(name){
    console.count(`certifying Doctor degree for $(name)`)
    return `Dr.${(name)}`
}