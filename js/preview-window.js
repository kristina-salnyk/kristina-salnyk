(() => {
  const refs = {
    preview: document.querySelector('[data-preview]'),
    openPreviewButtons: document.querySelectorAll('[data-preview-open]'),
    closePreviewArea: document.querySelector('[data-preview-close]'),
  };

  const closePreview = event => {
    if (event.target.isEqualNode(refs.closePreviewArea)) {
      togglePreview();
    }
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      togglePreview();
      window.removeEventListener('keydown', handleKeyDown);
    }
  };

  const openPreview = () => {
    togglePreview();
    window.addEventListener('keydown', handleKeyDown);
    document.querySelector('[data-preview-next]').focus();
  };

  const togglePreview = () => {
    document.body.classList.toggle('preview-opened');
    refs.preview.classList.toggle('backdrop--hidden');
  };

  refs.openPreviewButtons.forEach(ref => ref.addEventListener('click', openPreview));
  refs.closePreviewArea.addEventListener('click', closePreview);
})();
