function activateAR('model-1') {
    const modelViewer = document.getElementById('model-1');
    
    // Check if the device supports AR
    if (modelViewer.canActivateAR) {
        modelViewer.activateAR();
    } else {
        // Fallback: If AR isn't supported, show the 3D model in the card instead of the static image
        modelViewer.style.display = 'block';
        document.getElementById('model-1').style.display = 'none';
        alert("AR is not supported on this device, showing 3D preview instead.");
    }
}