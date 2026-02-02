import cn from 'classnames';
import { useRef, useState } from 'preact/hooks';

import { Button } from '@/components';

import list1 from '@/assets/list1.png';
import list2 from '@/assets/list2.png';
import list3 from '@/assets/list3.jpg';
import list4 from '@/assets/list4.png';

import css from './styles.module.scss';

type FileWithPreview = {
  fileData: File;
  preview?: string;
};

export const Upload = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [artistName, setArtistName] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer?.files) {
      const newFiles = Array.from(e.dataTransfer.files).map((file) => ({
        fileData: file,
        preview: file.type.startsWith('image/')
          ? URL.createObjectURL(file)
          : undefined,
      }));
      const arr = [...files, ...newFiles];
      if (arr.length > 10) {
        setSubmitStatus('error');
        setSubmitMessage(`Cannot upload more than 10 files at a time.`);
        return;
      }
      setFiles(arr);

      setSubmitStatus('idle');
    }
  };

  const handleFileSelect = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      const newFiles = Array.from(target.files).map((file) => ({
        fileData: file,
        preview: file.type.startsWith('image/')
          ? URL.createObjectURL(file)
          : undefined,
      }));
      const arr = [...files, ...newFiles];
      if (arr.length > 10) {
        setSubmitStatus('error');
        setSubmitMessage(`Cannot upload more than 10 files at a time.`);
        return;
      }
      setFiles(arr);
      setSubmitStatus('idle');
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (index: number) => {
    const file = files[index];
    if (file.preview) {
      URL.revokeObjectURL(file.preview);
    }
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (files.length === 0) {
        throw new Error('Please select at least one file to submit.');
      }

      const formData = new FormData();

      formData.append('artistName', artistName.trim());
      files.forEach((fileWrapper) => {
        formData.append('artwork', fileWrapper.fileData);
      });

      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Server responded with an error');
      }

      setSubmitStatus('success');
      setSubmitMessage(
        `Successfully submitted ${files.length} file(s)! Thank you for your contribution.`,
      );

      setFiles([]);
      setArtistName('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : 'Submission failed. Please try again.',
      );
    }
    setIsSubmitting(false);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div class={cn(css.wrapper, 'maxWidth')}>
      <div class={css.listWrapper}>
        <h2 class={css.title}>Last Year's art</h2>
        <img src={list1} class={css.img} />
        <img src={list2} class={css.img} />
        <img src={list3} class={css.img} />
        <img src={list4} class={css.img} />
      </div>
      <div class={css.col}>
        <div class={css.upload}>
          <h3 class={css.uploadTitle}>Submit</h3>
          <h3 class={css.uploadDescription}>Your artwork belongs here.</h3>
          <div class={css.submitWrapper}>
            <div class={css.grid}>
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
            </div>
            <div
              class={cn(css.submitInner, { [css.dragging]: isDragging })}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleBrowseClick}
            >
              <p class={css.dropText}>
                {isDragging
                  ? 'DROP FILES HERE'
                  : files.length > 0
                    ? `${files.length} ${files.length === 1 ? 'file' : 'files'} selected`
                    : 'DROP FILES HERE'}
              </p>
              <button
                class={css.button}
                onClick={(e) => {
                  e.stopPropagation();
                  handleBrowseClick();
                }}
              >
                OR BROWSE
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                style="display: none"
                onChange={handleFileSelect}
              />
            </div>
          </div>

          {files.length > 0 && (
            <div class={css.fileList}>
              <h4 class={css.fileListTitle}>Selected Files:</h4>
              {files.map((file, index) => (
                <div key={index} class={css.fileItem}>
                  {file.preview ? (
                    <img
                      src={file.preview}
                      alt={file.fileData.name}
                      class={css.filePreview}
                    />
                  ) : (
                    <div class={css.fileIcon}>📄</div>
                  )}
                  <div class={css.fileInfo}>
                    <span class={css.fileName}>{file.fileData.name}</span>
                    <span class={css.fileSize}>
                      {formatFileSize(file.fileData.size)}
                    </span>
                  </div>
                  <button
                    class={css.removeFile}
                    onClick={() => removeFile(index)}
                    aria-label="Remove file"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {submitStatus !== 'idle' && (
            <div
              class={cn(css.statusMessage, {
                [css.success]: submitStatus === 'success',
                [css.error]: submitStatus === 'error',
              })}
            >
              {submitMessage}
            </div>
          )}

          <div class={css.inputWrapper}>
            <label class={css.label}>
              <span>Artist Name (optional)</span>
              <input
                class={css.input}
                placeholder={'Leave blank for anonymous'}
                value={artistName}
                onInput={(e) =>
                  setArtistName((e.target as HTMLInputElement).value.trim())
                }
              />
            </label>
            <button
              class={cn(css.button, css.buttonSubmit, {
                [css.disabled]: isSubmitting,
              })}
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? 'Submitting...'
                : files.length > 1
                  ? 'Submit artworks'
                  : 'Submit artwork'}
            </button>
          </div>
        </div>
        <div class={css.downloadWrapper}>
          <h3 class={css.uploadTitle}>Or download the last year's pack</h3>
          <Button
            href={'https://borntosilly.com/borntosilly.zip'}
            download={'borntosilly2025.zip'}
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};
