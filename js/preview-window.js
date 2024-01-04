const CERTIFICATES = [
  {
    certificationUnit: 'EPAM University',
    certificate: './assets/Kristina-Salnyk-IT-Fundamentals.jpg',
    title: 'IT Fundamentals Certificate',
  },
  {
    certificationUnit: 'EPAM University',
    certificate: './assets/Kristina-Salnyk-Type-Script.jpg',
    title: 'TypeScript In-Depth Certificate',
  },
  {
    certificationUnit: 'EPAM University',
    certificate: './assets/Kristina-Salnyk-Front-End-Beginner.jpg',
    title: 'Front-End Beginner Certificate',
  },
  {
    certificationUnit: 'EPAM University',
    certificate: './assets/Kristina-Salnyk-Front-End-Intermediate.jpg',
    title: 'Front-End Intermediate Certificate',
  },
  {
    certificationUnit: 'EPAM University',
    certificate: './assets/Kristina-Salnyk-Project-Competition.jpg',
    title: 'EPAM Global Project Education Competition Certificate',
  },
  {
    certificationUnit: 'GoIT',
    certificate: './assets/Kristina-Salnyk-Full-Stack-Development.jpg',
    title: 'Full Stack Development Certificate',
  },
];

(() => {
  const refs = {
    preview: document.querySelector('[data-preview]'),
    openPreviewButtons: document.querySelectorAll('[data-preview-open]'),
    closePreviewArea: document.querySelector('[data-preview-close]'),
    previewIndicators: document.querySelector('[data-preview-indicators]'),
    previewInner: document.querySelector('[data-preview-inner]'),
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

  const openPreview = event => {
    refs.previewIndicators.innerHTML = '';
    refs.previewInner.innerHTML = '';

    const certificationUnit = event.target.attributes['data-certification-unit'].value;
    const certificates = CERTIFICATES.filter(item => item.certificationUnit === certificationUnit);

    setPreviewIndicators(certificates.length);
    setPreviewItems(certificates);
    togglePreview();

    window.addEventListener('keydown', handleKeyDown);
    if (certificates.length > 1) document.querySelector('[data-preview-next]').focus();
  };

  const setPreviewIndicators = count => {
    const indicatorRefs = Array(count)
      .fill(null)
      .map((_, index) => {
        const indicatorRef = document.createElement('li');
        indicatorRef.setAttribute('data-target', '#carousel');
        indicatorRef.setAttribute('data-slide-to', index.toString());
        if (index === 0) indicatorRef.classList.add('active');
        return indicatorRef;
      });

    refs.previewIndicators.append(...indicatorRefs);
  };

  const setPreviewItems = items => {
    const itemRefs = items.map((item, index) => {
      const itemImageRef = document.createElement('img');
      itemImageRef.classList.add('carousel__image', 'd-block');
      itemImageRef.setAttribute('src', item.certificate);
      itemImageRef.setAttribute('alt', item.title);

      const itemRef = document.createElement('div');
      itemRef.classList.add('carousel__item', 'carousel-item');
      if (index === 0) itemRef.classList.add('active');
      itemRef.append(itemImageRef);

      return itemRef;
    });

    refs.previewInner.append(...itemRefs);
  };

  const togglePreview = () => {
    document.body.classList.toggle('preview-opened');
    refs.preview.classList.toggle('preview--hidden');
  };

  refs.openPreviewButtons.forEach(ref => ref.addEventListener('click', openPreview));
  refs.closePreviewArea.addEventListener('click', closePreview);
})();
