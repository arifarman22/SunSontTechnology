import { useState } from 'react';
import { uploadFile } from '@/lib/upload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file');
      return;
    }

    setUploading(true);
    setError('');

    try {
      const result = await uploadFile(file);
      setUploadedUrl(result.url);
      setFile(null);
    } catch (err) {
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Upload File</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="file"
          onChange={handleFileChange}
          accept="image/*,.pdf,.doc,.docx"
          disabled={uploading}
        />
        
        <Button 
          onClick={handleUpload} 
          disabled={!file || uploading}
          className="w-full"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </Button>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        {uploadedUrl && (
          <div className="space-y-2">
            <p className="text-green-600 text-sm">Upload successful!</p>
            <p className="text-sm break-all">URL: {uploadedUrl}</p>
            {uploadedUrl.match(/\.(jpg|jpeg|png|gif)$/i) && (
              <img src={uploadedUrl} alt="Uploaded" className="w-full rounded" />
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
