

  var ToC =
    '<nav class="gem-c-contents-list " aria-label="Pages in this guide" role="navigation" data-module="track-click">' +
      '<h2 class="gem-c-contents-list__title">Contents</h2>' +
      '<ol class="gem-c-contents-list__list">';

  var newLine, el, title, link;

  $('h2').each(function() {

    el = $(this);
    title = el.text();
    link = '#' + el.attr('id');

    if ( link != '#undefined' ){

    newLine =
      '<li class="gem-c-contents-list__list-item gem-c-contents-list__list-item--dashed">' +
        '<a class="gem-c-contents-list__link " href="' + link + '">' +
          title +
        '</a>' +
      '</li>';

    ToC += newLine;
  }

  });

  ToC +=
     '</ol>' +
    '</nav>';


  $('#toc').html(ToC);
