/**
 * 将文件转换为数据 URL。
 * @param file 要转换的文件。
 * @returns 返回数据 URL 字符串
 */
export const fileToDataURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('Invalid file object provided.'));
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      if (reader.result && typeof reader.result === 'string') {
        resolve(reader.result as string);
      }
    };
    reader.onerror = function (e) {
      reject(e);
    };
    reader.readAsDataURL(file);
  });
};

/**
 * 将数据 URL 转换为图像元素。
 * @param dataURL 图像的数据 URL。
 * @returns 返回图像元素
 */
export const dataURLToImage = (dataURL: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    if (!dataURL) {
      reject(new Error('Invalid data URL provided.'));
      return;
    }
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image from data URL.'));
    img.src = dataURL;
  });
};

/**
 * 将画布转换为文件。
 * @param canvas 要转换的画布元素。
 * @param type 文件的类型（例如 'image/png'）。
 * @param quality 输出文件的质量（对于 image/jpeg，范围是 0-1）。
 * @returns Blob 或 null。
 */
export const canvasToFile = (
  canvas: HTMLCanvasElement,
  type: string,
  quality: number
): Promise<Blob | null> => {
  return new Promise((resolve, reject) => {
    if (!canvas) {
      reject(new Error('Invalid canvas element provided.'));
      return;
    }
    if (typeof type !== 'string' || !type) {
      reject(new Error('Invalid file type provided.'));
      return;
    }
    if (quality < 0 || quality > 100) {
      reject(new Error('Quality must be between 0 and 100.'));
      return;
    }
    canvas.toBlob((blob) => resolve(blob), type, convertQualityToBit(quality));
  });
};

/**
 * 将质量值转换为图像文件的比特率。
 * @param quality 质量值（0-100）。
 * @returns 对应的比特率（0-256）。
 */
export const convertQualityToBit = (quality: number): number => {
  if (quality < 0 || quality > 100) {
    throw new Error('Quality must be between 0 and 100.');
  }
  return !quality ? 0 : Math.min(quality * 256 * 0.01, 256);
};

/**
 * 将文件大小格式化为易读的字符串。
 * @param size 文件大小，单位为字节。
 * @returns 表示文件大小的字符串（B、KB、MB、GB）。
 */
export const formatFileSize = (size: number): string => {
  if (size < 0) {
    throw new Error('Size must be a non-negative number.');
  }
  if (size < 1024) {
    return `${size}B`;
  } else if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(2)}KB`;
  } else if (size < 1024 * 1024 * 1024) {
    return `${(size / 1024 / 1024).toFixed(2)}MB`;
  }
  return `${(size / 1024 / 1024 / 1024).toFixed(2)}GB`;
};

/**
 * 读取文件的内容作为文本。
 * @param file 要读取的文件。
 * @returns 返回文件内容作为字符串
 */
export const readFileAsText = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('Invalid file object provided.'));
      return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
      if (reader.result && typeof reader.result === 'string') {
        resolve(reader.result as string);
      }
    };
    reader.onerror = function (e) {
      reject(e);
    };
    reader.readAsText(file);
  });
};

/**
 * 从给定的 Blob 和文件名创建文件。
 * @param blob 要转换为文件的 Blob。
 * @param filename 文件的名称。
 * @returns 一个新的 File 对象。
 */
export const createFileFromBlob = (blob: Blob, filename: string): File => {
  if (!blob) {
    throw new Error('Invalid Blob object provided.');
  }
  if (!filename) {
    throw new Error('Filename must be provided.');
  }
  return new File([blob], filename, { type: blob.type });
};

/**
 * 通过创建链接并触发下载来保存文件。
 * @param blob 要保存的 Blob。
 * @param filename 文件的名称。
 */
export const saveFile = (blob: Blob, filename: string) => {
  if (!blob) {
    throw new Error('Invalid Blob object provided.');
  }
  if (!filename) {
    throw new Error('Filename must be provided.');
  }
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  window.URL.revokeObjectURL(link.href);
};

/**
 * 获取文件的扩展名。
 * @param file 要获取扩展名的文件。
 * @returns 文件的扩展名。
 */
export const getFileExtension = (file: File): string => {
  if (!file) {
    throw new Error('Invalid file object provided.');
  }
  return file.name.split('.').pop() ?? '';
};