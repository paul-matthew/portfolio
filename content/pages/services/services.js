document.addEventListener('DOMContentLoaded', function() {
    const dropBtns = document.querySelectorAll('.dropbtn');
    const dropdownContents = document.querySelectorAll('.dropdown-content');

    // Toggle dropdown content
    dropBtns.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.stopPropagation();
            const content = btn.nextElementSibling;
            content.classList.toggle('show');
        });
    });

    // Close dropdown content when clicking outside
    window.addEventListener('click', function(event) {
        dropdownContents.forEach(function(content) {
            if (!content.contains(event.target)) {
                content.classList.remove('show');
            }
        });
    });

    document.addEventListener('keyup', function(event) {
        if (event.key === 'Escape') {
            dropdownContents.forEach(function(content) {
                content.classList.remove('show');
            });
        }
    });
});
