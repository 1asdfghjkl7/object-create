
let obiject = Object.create(null,{});
let oobject = (keyz,valz,enumz,writ) => {
    obiject[keyz] = {enumerable:enumz, writable:writ, value:valz};
    console.log(obiject);
    return obiject;
    }
    
oobject("job1","Krusty Krab",'True','True')
oobject("job2","Chum Bucket",'True','True')
oobject("job3","Goofy Goober",'True','True')

let jobArray = [obiject.job1,obiject.job2,obiject.job3];
console.log(jobArray);

for (let key in jobArray) {
    
    let art = document.createElement('article');
    art.textContent = jobArray[key].value;
    art.id = jobArray[key].value;
    document.getElementById("wrapper").appendChild(art);
}
