console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
if (likeButton) {
  likeButton.addEventListener("click", handleLikeButtonClick);
}

const articleElement = document.createElement("article");
articleElement.className = "post";

const paragraphElement = document.createElement("p");
paragraphElement.className = "post__content";
paragraphElement.textContent = "Long story short, I survived";

const footerElement = document.createElement("footer");
footerElement.className = "post__footer";

const spanElement = document.createElement("span");
spanElement.className = "post__username";
spanElement.textContent = "@TaylorSwiftovna";

const buttonElement = document.createElement("button");
buttonElement.className = "post__button";
buttonElement.textContent = "♥ Like";
buttonElement.addEventListener("click", handleLikeButtonClick);

articleElement.append(paragraphElement, footerElement);
footerElement.append(spanElement, buttonElement);
document.body.append(articleElement);
