// loader.js
function loadContentContainer(identifier, text) {
    setTimeout(() => {
        document.getElementById(identifier).innerHTML = text;
    }, Math.random() * 2000); // Simulate variable loading times
}

// Simulate asynchronous loading with different content
loadContentContainer('block-1', "Welcome to Asynchronous Content Example");
loadContentContainer('block-2', 'Illustration of container 2');
loadContentContainer('block-3', 'Illustration of container 3, features asynchronous loading');
