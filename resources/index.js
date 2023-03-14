const paginationNumbers = document.querySelector(".pagination-numbers");
const paginatedList = document.querySelector(".paginated-list");
const listItems = paginatedList.querySelectorAll("div.row");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");

const paginationLimit = 2;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("li");
  pageNumber.className = "pagination-item";
  pageNumber.innerHTML = `<a class="page-link">${index}</a>`;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.append(pageNumber);
};

const getPaginationNumber = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-item").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex === currentPage) {
      button.classList.add("active");
    }
  });
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  handleActiveButtons();
  handleActivePageNumber();
  listItems.forEach((item, index) => {
    item.classList.add("d-none");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("d-none");
    }
  });
};

const disableButton = (button) => {
  button.classList.add("disabled");
};

const enableButton = (button) => {
  button.classList.add("disabled");
  button.classList.remove("disabled");
};

const handleActiveButtons = () => {
    console.log(currentPage);
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

window.addEventListener("load", () => {
  getPaginationNumber();
  setCurrentPage(1);

  document.querySelector("#next").addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelector("#previous").addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  document.querySelectorAll(".pagination-item").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});
