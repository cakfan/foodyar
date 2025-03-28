document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-menu");
  const indicators = document.querySelectorAll(".tab-indicator");
  const tabContents = [
    [
      {
        title: "Salad Kiwi Sugga",
        author: "Amir Samantha",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-1.png",
      },
      {
        title: "Avocado Muscle",
        author: "John Lennonk",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-2.png",
      },
      {
        title: "Bayam Red Poppeye",
        author: "Toekang Sayoer",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-3.png",
      },
      {
        title: "Naga Fruity Joss",
        author: "Imelda Saranghae",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-4.png",
      },
    ],
    [
      {
        title: "Avocado Muscle",
        author: "John Lennonk",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-2.png",
      },
      {
        title: "Bayam Red Poppeye",
        author: "Toekang Sayoer",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-3.png",
      },
      {
        title: "Salad Kiwi Sugga",
        author: "Amir Samantha",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-1.png",
      },
      {
        title: "Naga Fruity Joss",
        author: "Imelda Saranghae",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-4.png",
      },
    ],
    [
      {
        title: "Salad Kiwi Sugga",
        author: "Amir Samantha",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-1.png",
      },
      {
        title: "Bayam Red Poppeye",
        author: "Toekang Sayoer",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-3.png",
      },
      {
        title: "Naga Fruity Joss",
        author: "Imelda Saranghae",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-4.png",
      },
      {
        title: "Avocado Muscle",
        author: "John Lennonk",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-2.png",
      },
    ],
    [
      {
        title: "Avocado Muscle",
        author: "John Lennonk",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-2.png",
      },
      {
        title: "Bayam Red Poppeye",
        author: "Toekang Sayoer",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-3.png",
      },
      {
        title: "Naga Fruity Joss",
        author: "Imelda Saranghae",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-4.png",
      },
      {
        title: "Salad Kiwi Sugga",
        author: "Amir Samantha",
        rating: 5,
        thumbnail: "./assets/images/thumbnails/item-1.png",
      },
    ],
  ];

  // Function to update tab content
  function updateTabContent(index) {
    const tabContent = document.querySelector(".tab-content");

    // Clear existing content
    tabContent.innerHTML = "";

    // Populate with new content based on the selected index
    tabContents[index].forEach((item) => {
      const contentDiv = document.createElement("div");
      contentDiv.classList.add(
        "group",
        "cursor-pointer",
        "flex",
        "flex-col",
        "items-center",
        "w-[287px]"
      );

      contentDiv.innerHTML = `
          <div class="relative w-full h-[300px]">
            <img src="./assets/images/backgrounds/item.png" alt="" class="w-full h-full" />
            <div class="w-[271px] h-[285px] absolute left-[9px] top-[9px] rounded-tl-[68px] rounded-tr-[32px] rounded-b-[70px] overflow-clip">
              <img src="${
                item.thumbnail
              }" alt="" class="item-thumbnail object-cover" />
            </div>
            <div class="group-hover:opacity-100 transition-all duration-300 opacity-0 w-[271px] h-[285px] bg-foreground/60 absolute left-[9px] top-[9px] rounded-tl-[68px] rounded-tr-[32px] rounded-b-[70px] overflow-clip">
              <div class="flex w-full h-full items-center justify-center">
                <img src="./assets/images/icons/icon-play.svg" alt="" class="" />
              </div>
            </div>
          </div>
          <h4 class="mt-3.5 text-[22px] leading-7 font-medium">${
            item.title
          }</h4>
          <p class="mt-2 text-[16px] text-accent leading-5">${item.author}</p>
          <div class="item-rate mt-3 flex gap-1">
            ${Array(item.rating)
              .fill(
                '<img src="./assets/images/icons/star.svg" alt="" class="h-[22px] w-[22px]" />'
              )
              .join("")}
          </div>
        `;

      tabContent.appendChild(contentDiv);
    });
  }

  // Add click event listeners to each tab
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Update active tab styles
      tabs.forEach((t, i) => {
        t.querySelector(".tab-title").classList.toggle(
          "text-primary",
          i === index
        );
        t.querySelector(".tab-indicator").style.opacity =
          i === index ? "1" : "0";
      });

      // Update tab content
      updateTabContent(index);
    });
  });

  // Initialize the first tab as active
  updateTabContent(0);
  tabs[0].querySelector(".tab-title").classList.add("text-primary");
  tabs[0].querySelector(".tab-indicator").style.opacity = "1";
});
