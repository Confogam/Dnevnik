function updateIframeHeight(iframe) {
    if (iframe.contentDocument) {
      const iframeContent = iframe.contentDocument;
      const iframeBody = iframeContent.body;
      const height = iframeBody.scrollHeight;
      const computedStyle = getComputedStyle(iframe);
      const paddingTop = parseInt(computedStyle.paddingTop);
      const paddingBottom = parseInt(computedStyle.paddingBottom);
      const borderTop = parseInt(computedStyle.borderTopWidth);
      const borderBottom = parseInt(computedStyle.borderBottomWidth);
      const marginTop = parseInt(computedStyle.marginTop);
      const marginBottom = parseInt(computedStyle.marginBottom);
      iframe.style.height = `${height + iframe.offsetTop + paddingTop + paddingBottom + borderTop + borderBottom + marginTop + marginBottom}px`; 
  
      // Выводим размер iframe в консоль
      console.log("Высота iframe:", iframe.offsetHeight);
  
      // Находим вложенный iframe
      const innerIframe = iframe.contentDocument.querySelector('iframe');
  
      if (innerIframe) {
        // Устанавливаем высоту вложенного iframe 
        innerIframe.style.height = 'auto'; // Сначала устанавливаем высоту автоматически
        innerIframe.style.height = `${innerIframe.contentWindow.document.body.scrollHeight}px`; // Затем устанавливаем высоту точно
  
        // Добавляем обработчик события resize для вложенного iframe
        innerIframe.addEventListener('resize', () => {
          updateIframeHeight(iframe);
        });
  
        // Добавляем обработчик события load для вложенного iframe
        // чтобы вызывать updateIframeHeight при изменении недели
        innerIframe.addEventListener('load', () => {
          updateIframeHeight(iframe);
        });
      }
    }
  }
  
  //  Добавляем обработчик события "load"  для  всех  iframe  на странице
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    iframe.addEventListener('load', () => {
      // Вызываем updateIframeHeight один раз при загрузке
      updateIframeHeight(iframe);
    });
  });