const path = "../images/prices/";

// Check for IntersectionObserver support
if ('IntersectionObserver' in window) {
    document.addEventListener("DOMContentLoaded", function() {
        
        function handleIntersection(entries) {
            entries.map((entry) => {
                if (entry.isIntersecting) {
                    // Item has crossed our observation
                    // threshold - load src from data-src
                    entry.target.style.backgroundImage = "url('"+path+entry.target.dataset.bgimage+".png')";
                    // Job done for this item - no need to watch it!
                    observer.unobserve(entry.target);
                }
            });
        }
        
        const headers = document.querySelectorAll('.pcard:first-child');
        const observer = new IntersectionObserver(
            handleIntersection,
            { rootMargin: "100px" }
        );
        headers.forEach(header => observer.observe(header));
    });
} else {
    // No interaction support? Load all background images automatically
    const headers = document.querySelectorAll('.pcard:first-child');
    headers.forEach(header => {
        header.style.backgroundImage = "url('"+path+header.dataset.bgimage+".png')";
    });
}
