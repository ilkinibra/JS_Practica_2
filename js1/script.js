const course={
    courseName:"AP103",
    students:["Ilkin","Ehmed","Ferid","Fatime"]
};
const tbody=document.querySelector("tbody");

course.students.forEach((element,index) => {
    const tr = document.createElement("tr");
    const no = document.createElement("td");
    const name = document.createElement("td");
      no.innerText =index+1; 
      name.innerText = element;
      tr.appendChild(no);
      tr.appendChild(name);
      tbody.appendChild(tr)
    });