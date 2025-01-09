export class Platform {
  public static browser():
    | 'darwin'
    | 'linux'
    | 'win32'
    | 'android'
    | undefined {
    if (/macintosh/i.test(window?.navigator.userAgent)) {
      return 'darwin';
    }

    if (/windows/i.test(window?.navigator.userAgent)) {
      return 'win32';
    }

    if (/linux/i.test(window?.navigator.userAgent)) {
      return 'linux';
    }

    if (/android/i.test(window?.navigator.userAgent)) {
      return 'android';
    }

    return undefined;
  }

  public static current() {
    return require('process')?.platform ?? Platform.browser() ?? 'unknown';
  }

  public static is(os: 'darwin' | 'linux' | 'win32' | 'android'): boolean {
    return Platform.current() === os;
  }
}
