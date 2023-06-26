const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination

  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function(swiper, current, total) {
      var progress = current / (total - 1) * 100;
      var progressBarHTML = '';

      for (var i = 1; i <= total; i++) {
        var colorClass = (i == current) ? 'swiper-pagination__progress-bar-active' : 'swiper-pagination__progress-bar-inactive';
        progressBarHTML += '<div class="swiper-pagination__progress-bar ' + colorClass + '"></div>';
      }

      return progressBarHTML;

    }

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },

});
