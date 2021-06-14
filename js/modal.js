document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
    var instance = M.Materialbox.getInstance(elem);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });
