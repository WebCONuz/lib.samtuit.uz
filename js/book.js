const books = [
    {id: 1, class: "dasturlash", imgUrl: "../images/kitoblar/darslik3.webp", alt: "rasm1", title: "Dasturalsh"},
    {id: 1, class: "badiiy", imgUrl: "../images/kitoblar/darslik3.webp", alt: "rasm1", title: "alvido bolalik"},
    {id: 2, class: "tabiiy", imgUrl: "../images/kitoblar/tabiiy.jpg", alt: "rasm3", title: "konsepsiya"},
    {id: 3, class: "darslik", imgUrl: "../images/kitoblar/dasrlik.jpg", alt: "rasm4", title: "dasturlash II"},
    {id: 4, class: "ilmiy", imgUrl: "../images/kitoblar/ilmiy.jpg", alt: "rasm5", title: "ilmiy tatqiqot asoslari"},
    {id: 5, class: "gumanitar", imgUrl: "../images/kitoblar/psexologiya.jpg", alt: "rasm6", title: "psixologiya"},
    {id: 6, class: "akt", imgUrl: "../images/kitoblar/akt.jpg", alt: "rasm7", title: "AKT"}
];

books.forEach((item) => {
    const card = `
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4 all ${item.class}">
        <div class="root-card d-flex flex-column align-items-center text-center p-3">
            <div class="img-box mb-3">
                <img src="${item.imgUrl}" alt="${item.alt}">
            </div>
            <p class="text-capitalize">${item.title}</p>
            <button class="main-btn"><a href="${item.bookUrl}">Yuklab olish</a></button>
        </div>
    </div>`;
    document.querySelector(".root .row").innerHTML += card;
});

const categoryTitle = document.querySelectorAll('.internal-navbar');
const allCategoryPosts = document.querySelectorAll('.all');
// console.log(allCategoryPosts);

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
            console.log(books.title)
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};