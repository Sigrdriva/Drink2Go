const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination

  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function(swiper, current, total) {
      console.log (current);
      console.log (total);
      var progress = current / (total - 1) * 100;
      console.log (progress);
      var progressBarHTML = '';

      for (var i = 1; i <= total; i++) {
        var colorClass = (i == current) ? 'progress-bar-active' : 'progress-bar-inactive';
        progressBarHTML += '<div class="progress-bar ' + colorClass + '"></div>';
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
