function injectCopyright() {
  if (document.getElementById('custom-copyright')) return;

  // 1. Find the Mintlify link specifically
  const mintlifyLink = document.querySelector('footer a[href*="mintlify.com"]');
  
  if (mintlifyLink) {
    // 2. Find the container that holds that link (usually a div or p)
    const attributionContainer = mintlifyLink.closest('div');
    const footer = document.querySelector('footer');

    if (attributionContainer && footer) {
      const copyrightDiv = document.createElement('div');
      copyrightDiv.id = 'custom-copyright';
      copyrightDiv.innerHTML = '© 2026 Kythera of Anevern. All rights reserved.';
      
      // Styling
      copyrightDiv.style.fontSize = '16px';
      copyrightDiv.style.width = '100%';
      copyrightDiv.style.marginBottom = '4px'; 

      // 3. Insert it exactly before the attribution container
      attributionContainer.parentNode.insertBefore(copyrightDiv, attributionContainer);
    }
  }
}

// Keep the rest of your observer logic below...
injectCopyright();
const observer = new MutationObserver(() => injectCopyright());
observer.observe(document.body, { childList: true, subtree: true });