loadData();

function loadData() {
  loadCategories(categories);
  loadEvents(events);
}
function loadEvents(events) {
  const eventsWrapper = document.querySelector(".events__wrapper");
  const eventsFragment = document.createDocumentFragment();
  events.forEach((event) => {
    let eventElement = createEvent(event);
    appendChild(eventsFragment, eventElement);
  });
  appendChild(eventsWrapper, eventsFragment);
}
function loadCategories(categories) {
  const categoriesWrapper = document.querySelector(".categories__wrapper");
  const selectCategories = document.querySelector(
    ".formSearch__control--categories"
  );
  const categoriesFragment = document.createDocumentFragment();
  const optionsCategoriesFragment = document.createDocumentFragment();

  categories.forEach((category, index) => {
    let optionCategory = createOptionCategoriesElement(category);
    let categoryElement = createCategoryElement(category, index + 1);

    appendChild(optionsCategoriesFragment, optionCategory);
    appendChild(categoriesFragment, categoryElement);
  });
  appendChild(selectCategories, optionsCategoriesFragment);
  appendChild(categoriesWrapper, categoriesFragment);
}
function createCategoryElement(category, index) {
  let categoryElement = document.createElement("li");
  categoryElement.classList.add("category");
  categoryElement.innerHTML = `<picture>
    <source srcset="dist/img/categoria_${index}.avif " type="image/avif">
    <source srcset="dist/img/categoria_${index}.webp " type="image/webp">
    <source srcset="dist/img/categoria_${index}.jpg " type="image/jpeg">
    <img loading="lazy" decoding="async" src="dist/img/categoria_${index}.jpg" class="category__img"
        alt="imagen categoria">
</picture>
<p class="category__name">${category}</p>`;
  return categoryElement;
}
function createOptionCategoriesElement(category) {
  let optionCategory = document.createElement("option");
  optionCategory.text = category;
  return optionCategory;
}
function createEvent({ name, date, author, id }) {
  const eventElement = document.createElement("div");
  eventElement.classList.add("event");
  eventElement.innerHTML = `  
    <a href="meeti.html">
  <picture>
    <source srcset="dist/img/imagen${id}.avif" type="image/avif" />
    <source srcset="dist/img/imagen${id}.webp" type="image/webp" />
    <source srcset="dist/img/imagen${id}.jpg" type="image/jpeg" />
    <img
      loading="lazy"
      decoding="async"
      src="dist/img/imagen${id}.jpg"
      class="event__img"
      alt="imagen evento"
    />
  </picture>
  <div class="event__content">
    <p class="event__date">${date}</p>
    <h3 class="event__name">${name}</h3>
    <!--Author of the event-->
    <div class="author">
      <div class="author__img">
        <picture>
          <source srcset="dist/img/perfil${author.profileId}.avif" type="image/avif" />
          <source srcset="dist/img/perfil${author.profileId}.webp" type="image/webp" />
          <source srcset="dist/img/perfil${author.profileId}.jpg" type="image/jpeg" />
          <img
            loading="lazy"
            decoding="async"
            src="dist/img/perfil${author.profileId}.jpg"
            class="event__img"
            alt="imagen evento"
          />
        </picture>
      </div>
      <div class="author__information">
        <p class="author__event">Organizado por:</p>
        <p class="author__name">${author.name}</p>
      </div>
    </div>
    <!--Author of the event-->
  </div>
</a>`;
  return eventElement;
}
function appendChild(element, children) {
  if (element) {
    element.appendChild(children);
  }
}
