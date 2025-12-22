export default function animatedButton() {
    // global pop-button click effect
    document.addEventListener("mousedown", (e) => {
        if (!e.target.classList.contains("pop")) return;

        const btn = e.target;

        // Extract the background color
        const bg = window.getComputedStyle(btn).backgroundColor;
        btn.style.setProperty("--burst-color", bg);

        // Reset animation (force restart)
        btn.classList.remove("pop-active");
        void btn.offsetWidth;
        btn.classList.add("pop-active");

        btn.addEventListener("animationend", () => {
            btn.classList.remove("pop-active");
        }, { once: true });
    });

    document.addEventListener("mouseover", (e) => {
        if (!e.target.classList.contains("pop")) return;

        const btn = e.target;

        // Reset animation (force restart)
        btn.classList.remove("pop-active");
        void btn.offsetWidth;
        btn.classList.add("pop-active");

        btn.addEventListener("animationend", () => {
            btn.classList.remove("pop-active");
        }, { once: true });
    });
}