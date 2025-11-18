const quotesData = [
    { "q": "A single act of kindness throws out roots in all directions, and the roots spring up and make new trees.", "a": "Amelia Earhart" },
    { "q": "The smallest act of kindness is worth more than the greatest intention.", "a": "Kahlil Gibran" },
    { "q": "In the long run, the sharpest weapon of all is a kind and gentle spirit.", "a": "Anne Frank" },
    { "q": "A random act of kindness, no matter how small, can make a tremendous impact on someone else's life.", "a": "Roy T. Bennett" },
    { "q": "Always show more kindness than seems necessary because the person receiving it needs it more than you will ever know.", "a": "Colin Powell" },
    { "q": "Perhaps the most tragic thing about mankind is that we are all dreaming about some magical garden over the horizon, instead of enjoying the roses that are right outside today.", "a": "Andrew Carnegie" },
    { "q": "If you want work well done, select a busy man; the other kind has no time.", "a": "Elbert Hubbard" },
    { "q": "Help others for all the times that you have been ignored. Be kind to others, for all the times that you have been scorned.", "a": "Ming-Dao Deng" },
    { "q": "Treat everyone with politeness and kindness, not because they are nice, but because you are.", "a": "Roy T. Bennett" },
    { "q": "Tenderness and kindness are not signs of weakness and despair, but manifestations of strength and resolution.", "a": "Kahlil Gibran" }
];

const container = document.getElementById("quotes-container");

quotesData.forEach(item => {
    const box = document.createElement("div");
    box.classList.add("quote-box");

    const quote = document.createElement("p");
    quote.textContent = `"${item.q}"`;

    const author = document.createElement("p");
    author.textContent = `- ${item.a}`;
    author.classList.add("author");

    box.appendChild(quote);
    box.appendChild(author);

    container.appendChild(box);
});
