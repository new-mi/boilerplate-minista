const testUtils: Record<string, any> = {
  buttonClickText: () => alert('Clicked!'),
};
(window as any).testUtils = testUtils;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('test-click');
  button?.addEventListener('click', () => testUtils.buttonClickText());
});
