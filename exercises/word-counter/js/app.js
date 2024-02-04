// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textareaInput = document.getElementById('text');
const statsSection =  document.getElementById('stat');

// 🤖: Create an Event Listener on textarea input
textareaInput.addEventListener('input', function() {
  const text = textareaInput.value;
  const words = text.trim().split(/\s+/).filter(word => word !== '').length;
  const characters = text.length;
  statsSection.textContent = `You've written ${words} words and ${characters} characters.`;
});

// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.