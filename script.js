// Temperature slider logic
const tempSlider = document.getElementById('temp-slider');
const tempValue = document.getElementById('temp-value');

if (tempSlider) {
  tempSlider.addEventListener('input', () => {
    tempValue.textContent = `${tempSlider.value}°C`;
  });
}

// AC toggle logic (same style as lights)
function toggleAC(button) {
  const actionSpan = button.querySelector('.action-text');
  const isActive = button.classList.toggle('active');
  actionSpan.textContent = isActive ? 'Turn Off' : 'Turn On';
}

document.querySelectorAll('.btn-group button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    const actionSpan = button.querySelector('.action-text');
    if (!button.classList.contains('active')) {
      actionSpan.textContent = 'Turn On';
    }
  });

  button.addEventListener('mouseleave', () => {
    const actionSpan = button.querySelector('.action-text');
    if (!button.classList.contains('active')) {
      actionSpan.textContent = 'Turn On';
    } else {
      actionSpan.textContent = 'Turn Off';
    }
  });
});
