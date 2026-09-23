(function(){
  var btn = document.getElementById('themeToggle');
  var root = document.documentElement;
  var current = null;
  try{ current = localStorage.getItem('theme'); }catch(e){}
  if(current === 'light' || current === 'dark'){ root.setAttribute('data-theme', current); }
  function prefersDark(){
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function activeTheme(){
    var attr = root.getAttribute('data-theme');
    if(attr === 'light' || attr === 'dark') return attr;
    return prefersDark() ? 'dark' : 'light';
  }
  btn.addEventListener('click', function(){
    var next = activeTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try{ localStorage.setItem('theme', next); }catch(e){}
  });
})();