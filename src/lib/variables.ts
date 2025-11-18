export const MY_IMG_DIR = import.meta.env.VITE_IMG_DIR ?? 'https://flowbite-admin-dashboard.vercel.app/images';

/**
 * Constructs a path to an avatar image
 * @param src The avatar image filename
 * @returns The full path to the avatar image
 */
export const avatarPath = (src: string): string => MY_IMG_DIR + '/users/' + src;

/**
 * Constructs a path to any image with optional subdirectories
 * @param src The image filename
 * @param subdirs Optional subdirectories to include in the path
 * @returns The full path to the image
 */
export const imagesPath = (src: string, ...subdirs: string[]): string => [MY_IMG_DIR, ...subdirs, src].filter(Boolean).join('/');

export function mapUsersWithAvatars<T extends { avatar: string }>(users: T[]): T[] {
  if (!MY_IMG_DIR) {
    console.error('MY_IMG_DIR is not configured. Avatar paths may be incorrect.');
  }
  return users.map((user) => ({
    ...user,
    avatar: user.avatar.startsWith('http') ? user.avatar : `${MY_IMG_DIR}/users/${user.avatar}`
  }));
}
