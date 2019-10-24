const fileInput = document.querySelector(".type-input");

fileInput.addEventListener('change', (event) => {
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event) => {
        palindrom(reader.result.split("\r\n"))
    }
})

const palindrom = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let str2 = arr[i].toLowerCase().split('').reverse().join('');
        if (arr[i] == str2) {
            console.log(arr[i])
        }
    }
} 