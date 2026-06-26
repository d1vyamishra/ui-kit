document.addEventListener('DOMContentLoaded', () => {
  // Toggle Button Group Logic
  const toggleButtons = document.querySelectorAll('.nm-toggle-btn');
  
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const parent = this.parentElement;
      parent.querySelectorAll('.nm-toggle-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Dynamic Button Feedback
  const buttons = document.querySelectorAll('.nm-btn:not(.active)');
  
  buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
      btn.style.transform = "scale(0.97)";
    });
    btn.addEventListener('mouseup', () => {
      btn.style.transform = "translateY(-2px)";
    });
  });
});
