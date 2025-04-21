export declare const imgDir: string;
/**
 * Constructs a path to an avatar image
 * @param src The avatar image filename
 * @returns The full path to the avatar image
 */
export declare const avatarPath: (src: string) => string;
/**
 * Constructs a path to any image with optional subdirectories
 * @param src The image filename
 * @param subdirs Optional subdirectories to include in the path
 * @returns The full path to the image
 */
export declare const imagesPath: (src: string, ...subdirs: string[]) => string;
