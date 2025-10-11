const input = document.createElement('input');
input.type = 'file';
input.accept = '.svg';

input.addEventListener('change', (event) => {
  const file = event.target.files[0];
  console.log(file.name, file.size, file.type);

  const reader = new FileReader();
  reader.onload = () => {
    console.log(reader.result);
  };
  reader.readAsText(file);
});

document.body.appendChild(input);