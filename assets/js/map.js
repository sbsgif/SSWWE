// Select the body and create a tooltip div
let body = document.body;
let tooltip = document.createElement("div");
tooltip.setAttribute("id", "tooltip");
tooltip.style.position = "absolute";
tooltip.style.background = "linear-gradient(65deg, rgba(46, 166, 221, 1) 20%, rgba(255, 207, 6, 1) 100%)";

tooltip.style.color = "white";
tooltip.style.padding = "5px 10px";
tooltip.style.borderRadius = "10px";
tooltip.style.fontSize = "16px";
tooltip.style.pointerEvents = "none"; // Avoid blocking mouse events
tooltip.style.visibility = "hidden"; // Initially hidden
tooltip.style.transition = "opacity 0.4s ease-in-out"; // Smooth transition for visibility change
tooltip.style.opacity = "0"; // Initially transparent
body.append(tooltip);

// Add event listeners to provinces
let provinces = document.querySelectorAll("path, polygon");
provinces.forEach((province) => {
  province.addEventListener("mouseenter", (event) => {
    let provinceName = event.target.getAttribute("id") || "Unknown";
    let provinceNumber = event.target.getAttribute("number") || "None";

    // Update tooltip content
    tooltip.textContent = `${provinceName} : ${provinceNumber}`;

    // Make the tooltip visible with fade-in effect
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1"; // Set opacity to make it visible

    // Change the color of the area on hover to black
    event.target.style.fill = "black"; // For path or polygon elements, change the fill
    event.target.style.stroke = "white"; // Optional: change the stroke to white for contrast
  });

  province.addEventListener("mousemove", (event) => {
    // Update tooltip position with offset to avoid overlap with cursor
    let tooltipWidth = tooltip.offsetWidth;
    let tooltipHeight = tooltip.offsetHeight;
    let left = event.pageX + 5;
    let top = event.pageY + 5;

    // Adjust tooltip positioning to avoid overflow on the right or bottom
    if (left + tooltipWidth > window.innerWidth) {
      left = event.pageX - tooltipWidth - 5;
    }
    if (top + tooltipHeight > window.innerHeight) {
      top = event.pageY - tooltipHeight - 5;
    }

    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
  });

  province.addEventListener("mouseleave", (event) => {
    // Fade out the tooltip when mouse leaves
    tooltip.style.opacity = "0";

    // Delay hiding the tooltip after fading out to make it more visible
   

    // Reset the color of the area when mouse leaves
    event.target.style.fill = ""; // Reset the fill to original
    event.target.style.stroke = ""; // Reset the stroke to original
  });
});
