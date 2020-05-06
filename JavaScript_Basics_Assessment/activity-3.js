studentList = ['Sam', 'Drake', 'Carter'];
for (let i = 0; i < 3; i++) {
    const newName = prompt(`enter person ${i+1}'s name:`);
    studentList.push(newName);
}
for (let i = 0; i < studentList.length; i++){
    console.log(studentList[i]);
}