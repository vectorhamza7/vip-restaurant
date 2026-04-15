function activateAR(modelId) {
    const modelViewer = document.getElementById(modelId);
    
    // Check if the device supports AR
    if (modelViewer.canActivateAR) {
        modelViewer.activateAR();
    } else {
        // Fallback: If AR isn't supported, show the 3D model in the card instead of the static image
        modelViewer.style.display = 'block';
        if (modelViewer.previousElementSibling) {
            modelViewer.previousElementSibling.style.display = 'none';
        }
        alert("AR is not supported on this device, showing 3D preview instead.");
    }
}