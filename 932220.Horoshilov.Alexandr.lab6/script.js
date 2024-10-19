document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.getElementById('left-button');
    const centerButton = document.getElementById('center-button');
    const rightButton = document.getElementById('right-button');
    const leftColumn = document.querySelector('.cat');
    const rightColumn = document.querySelector('.dog');
    const leftImage = leftColumn.querySelector('img');
    const rightImage = rightColumn.querySelector('img');

    function setColumnWidths(leftWidth, rightWidth) {
        document.documentElement.style.setProperty('--left-width', leftWidth);
        document.documentElement.style.setProperty('--right-width', rightWidth);
    }

    function toggleVisibility(element, isVisible) {
        element.classList.toggle('hidden', !isVisible);
        element.classList.toggle('visible', isVisible);
    }

    leftButton.addEventListener('click', function() {
        setColumnWidths('95%', '5%');
        toggleVisibility(leftImage, true);
        toggleVisibility(rightImage, false);
    });

    centerButton.addEventListener('click', function() {
        setColumnWidths('50%', '50%');
        toggleVisibility(leftImage, true);
        toggleVisibility(rightImage, true);
    });

    rightButton.addEventListener('click', function() {
        setColumnWidths('5%', '95%');
        toggleVisibility(leftImage, false);
        toggleVisibility(rightImage, true);
    });
});