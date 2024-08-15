document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('ul.nav-pills li').forEach(function (li) {
    li.addEventListener('mouseover', function () {
      this.querySelector('a').classList.add('active');
    });

    li.addEventListener('mouseout', function () {
      this.querySelector('a').classList.remove('active');
    });
  });
});
