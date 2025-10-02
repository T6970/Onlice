let jsonData = null;

function loadJsonFile(inputElementId) {
  return new Promise((resolve, reject) => {
    const input = document.getElementById(inputElementId);
    if (!input) {
      reject(new Error(`No element found with id ${inputElementId}`));
      return;
    }

    input.addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (!file) {
        reject(new Error("No file selected"));
        return;
      }

      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          jsonData = JSON.parse(e.target.result);
          resolve(jsonData);
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = () => reject(reader.error);

      reader.readAsText(file);
    });
  });
}

export { document, loadFile };
