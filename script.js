const buttons = document.querySelectorAll('.icon-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Quick click animation for a friendly feel
    button.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(0.96)' },
      { transform: 'scale(1)' }
    ], {
      duration: 150,
      easing: 'ease-out'
    });
  });
});

