import { API_BASE_URL } from './api';

export interface UploadResult {
  message: string;
  filename: string;
  url: string;
  size: number;
  mimetype: string;
}

export async function uploadFile(file: File): Promise<UploadResult> {
  const formData = new FormData();
  formData.append('file', file);

  const token = localStorage.getItem('token');
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const uploadUrl = API_BASE_URL.endsWith('/api')
    ? `${API_BASE_URL}/upload`
    : `${API_BASE_URL}/api/upload`;

  const response = await fetch(uploadUrl, {
    method: 'POST',
    headers,
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Upload failed: ${response.statusText}`);
  }

  return await response.json();
}
