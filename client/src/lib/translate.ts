const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://www.sunson-tech.com/api';

const langMap: Record<string, string> = {
  'en': 'en', 'es': 'es', 'fr': 'fr', 'de': 'de', 'it': 'it', 'pt': 'pt',
  'zh-CN': 'zh', 'ja': 'ja', 'ko': 'ko', 'ar': 'ar', 'hi': 'hi', 'ru': 'ru',
  'nl': 'nl', 'sv': 'sv', 'pl': 'pl', 'tr': 'tr', 'th': 'th', 'vi': 'vi',
  'id': 'id', 'ms': 'ms', 'bn': 'bn', 'ur': 'ur', 'fa': 'fa'
};

export const translatePage = async (targetLang: string) => {
  if (targetLang === 'en') {
    document.querySelectorAll('[data-translate]').forEach(el => {
      const original = el.getAttribute('data-original');
      if (original) el.textContent = original;
    });
    return;
  }

  const elements = Array.from(document.querySelectorAll('[data-translate]'));
  
  for (const element of elements) {
    const originalText = element.getAttribute('data-original') || element.textContent;
    if (!element.getAttribute('data-original')) {
      element.setAttribute('data-original', originalText || '');
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/translate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: originalText,
          targetLang: langMap[targetLang] || targetLang
        })
      });
      
      if (!response.ok) {
        console.error('Translation API error:', response.status);
        continue;
      }
      
      const data = await response.json();
      if (data.translatedText) {
        element.textContent = data.translatedText;
      }
    } catch (error) {
      console.error('Translation failed:', error);
    }
  }
};
