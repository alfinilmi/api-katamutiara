// Komponen
class LearnWord extends HTMLElement {
  set dataWord(data) {
    this._dataWord = data;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="the-word">${this._dataWord.word}</div>
      <div class="the-pronun">/ ${this._dataWord.pronunciation} /</div>
      <div class="definition"><span class="text-bold">Definition : </span> ${this._dataWord.definition}</div>
    `;
  }
}

customElements.define("learn-word", LearnWord);


// Mengambil data
const getData = async () => {
  const respon = await fetch("https://random-words-api.vercel.app/word");
  const responJson = await respon.json();

  const tagLearnWord = document.querySelector("learn-word");
  tagLearnWord.dataWord = responJson[0];
}

getData();