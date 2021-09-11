import clearDom from '../helpers/clearDom';

const flashCard = (card) => {
  const domString = `<span id="flashDirections">Click and hold the card to flip, then press "New Card" for another card"</span><div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <p class="flash-definition">${card.definition}</p>
      </div>
      <div class="flip-card-back">
        <h3 class="flash-title">${card.title}</h3>
        <h5 class="flash-tech">Language/Tech: ${card.tech}</h5>
      </div>
    </div>
  </div><div><button id="new-card-btn" type="button" class="btn btn-primary">New Card</button></div>`;

  clearDom();
  document.querySelector('#flashContainer').innerHTML = domString;
};

export default flashCard;
