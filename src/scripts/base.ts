const testUtils: Record<string, any> = {
  buttonClickText: () => alert('Clicked!'),
};
window.testUtils = testUtils;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('test-click');
  button?.addEventListener('click', () => testUtils.buttonClickText());

  initTestSwiper();
  initTestFancyBox();
});

function initTestFancyBox() {
  window.Fancybox.bind('[data-fancybox="gallery"]', {
    compact: false,
    idle: false,

    animated: false,
    showClass: false,
    hideClass: false,

    dragToClose: false,

    Images: {
      // Disable animation from/to thumbnail on start/close
      zoom: false,
    },

    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ['close'],
      },
    },

    Thumbs: {
      type: 'classic',
      Carousel: {
        center: function () {
          return this.contentDim > this.viewportDim;
        },
      },
    },

    Carousel: {
      // Remove the navigation arrows
      Navigation: false,
    },
  });
}

function initTestSwiper() {
  new window.Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}
