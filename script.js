//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.getElementsByClassName("grid-item");
    const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset_button");

    changeButton.addEventListener("click", function() {
        const blockId = document.getElementById("block_id").value;
        const colorId = document.getElementById("colour_id").value;

        // Reset background colors of all grid items to transparent
        for (let i = 0; i < gridItems.length; i++) {
            gridItems[i].style.backgroundColor = "transparent";
        }

        // Change the background color of the specified grid item
        const item = document.getElementById(blockId);
        if (item) {
            item.style.backgroundColor = colorId;
        }
    });

    resetButton.addEventListener("click", function() {
        // Reset background colors of all grid items to transparent
        for (let i = 0; i < gridItems.length; i++) {
            gridItems[i].style.backgroundColor = "transparent";
        }
    });
});