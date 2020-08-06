function setTheme(mode) {
  if (mode === 'theme-light') {
    document.getElementById('theme-style').href = 'styles/default.css';
  }
  if (mode === 'theme-dark') {
    document.getElementById('theme-style').href = 'styles/dark.css';
  }
  localStorage.setItem('theme', mode);
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    document.getElementById('slider').checked = false;
  } else {
    setTheme('theme-light');
    document.getElementById('slider').checked = true;
  }
})();
