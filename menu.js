const closemenu = document.getElementById('closemenu');
const openmenu = document.getElementById('openmenu');

document.getElementById('closemenu').addEventListener('click', () => {
    document.getElementById('closemenu').style.display = "none";
    document.getElementById('openmenu').style.display = "block";
});
document.getElementById('openmenu').addEventListener('click', () => {
    document.getElementById('closemenu').style.display = "block";
    document.getElementById('openmenu').style.display = "none";
});
console.log(1);