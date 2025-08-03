function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(`Failed to load image from ${url}`);
        img.src = url;
    });
}

btn.addEventListener("click", () => {
    loadingDiv.style.display = "block";
    errorDiv.innerText = "";
    output.innerHTML = "";

    const promises = images.map((image) => loadImage(image.url));
    Promise.all(promises)
        .then((imgs) => {
            loadingDiv.style.display = "none";
            imgs.forEach((img) => output.appendChild(img));
        })
        .catch((error) => {
            loadingDiv.style.display = "none";
            errorDiv.innerText = error;
            output.appendChild(errorDiv);
        });
});

