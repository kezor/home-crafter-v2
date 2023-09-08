export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function isActiveLink(path: string, currentRoute: string) {
    if(path === '/') {
        return currentRoute === '/';
    }
    return currentRoute.includes(path);      
}
