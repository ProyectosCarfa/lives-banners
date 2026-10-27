function addNewItem() {
    const titleInput = document.getElementById('inputTitle');
    const titleText = titleInput.value.trim();

    if (titleText === "") {
        alert("Por favor, escribe un título.");
        return;
    }

    const selectedIconRadio = document.querySelector('input[name="techIcon"]:checked');
    const iconValue = selectedIconRadio.value;

    let iconClass = "";
    let iconColor = "";

    switch (iconValue) {
        case 'python': iconClass = "fab fa-python"; iconColor = "#3776AB"; break;
        case 'js': iconClass = "fab fa-js"; iconColor = "#F7DF1E"; break;
        case 'java': iconClass = "fab fa-java"; iconColor = "#007396"; break;
        case 'html': iconClass = "fab fa-html5"; iconColor = "#E34F26"; break;
        case 'php': iconClass = "fab fa-php"; iconColor = "#777BB4"; break;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'bar-wrapper';

    const marqueeHTML = `
                <div class="tech-bar">
                    <div class="marquee-container">
                        <div class="marquee-content">
                            <i class="${iconClass}" style="color: ${iconColor};"></i>
                            <h2>${titleText.toUpperCase()}</h2>
                        </div>
                    </div>
                </div>
                <button class="btn-delete" onclick="this.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            `;

    wrapper.innerHTML = marqueeHTML;
    document.getElementById('savedList').appendChild(wrapper);

    const bar = wrapper.querySelector('.tech-bar');
    const container = wrapper.querySelector('.marquee-container');
    const content = wrapper.querySelector('.marquee-content');
    setTimeout(() => {
        if (content.offsetWidth > bar.offsetWidth - 100) {
            container.classList.add('is-marquee');
        }
    }, 50);

    titleInput.value = "";
    titleInput.focus();
}
