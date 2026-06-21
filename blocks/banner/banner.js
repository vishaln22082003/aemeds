export default function decorate(block) {
  const rows = [...block.children];

  const title = rows[0]?.textContent.trim();
  const description = rows[1]?.textContent.trim();

  block.innerHTML = `
    <div class="banner-content">
      <h1>${title}</h1>
      <p>${description}</p>
    </div>
  `;
}