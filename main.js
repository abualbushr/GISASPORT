let names = ['Habib', 'Ahmed', 'Mustafa'];
// document.write(names);
console.log(names);
let login = prompt('Enter your Name:');
window.alert('Are you sure to continue with ' + login + '?');
if(login == 'Mustafa' || login == 'Habib' || login == 'Ahmed'){
    document.write('Hello, ' + login);
}else{
    document.write('Sorry you are not logged in');
}