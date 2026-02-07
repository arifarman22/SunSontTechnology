import type { Request, Response } from 'express';

const LIBRE_TRANSLATE_API = 'https://libretranslate.com/translate';

export async function translateText(req: Request, res: Response) {
  const { text, targetLang } = req.body;

  if (!text || !targetLang) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch(LIBRE_TRANSLATE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        source: 'en',
        target: targetLang,
        format: 'html'
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Translation failed' });
  }
}
