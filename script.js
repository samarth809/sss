
function openSurprise() {

    const letter = document.getElementById("surprise");

    letter.style.display = "block";

    letter.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();
}

function createConfetti() {

    const emojis = ["❤️", "💗", "✨", "🎉", "💕"];

    for (let i = 0; i < 40; i++) {

        const item = document.createElement("div");

        item.innerText =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-30px";
        item.style.fontSize = "22px";
        item.style.zIndex = "9999";
        item.style.pointerEvents = "none";

        document.body.appendChild(item);

        const duration = 2000 + Math.random() * 2000;

        item.animate(
            [
                { transform: "translateY(0) rotate(0deg)", opacity: 1 },
                { transform: "translateY(100vh) rotate(360deg)", opacity: 0 }
            ],
            {
                duration: duration,
                easing: "ease-in"
            }
        );

        setTimeout(() => {
            item.remove();
        }, duration);
    }
}
