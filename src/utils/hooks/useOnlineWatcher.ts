import { useEffect } from 'react';

export function useOnlineWatcher(onlineListener: EventListener, offlineListener: EventListener) {
  useEffect(() => {
    window.addEventListener('online', onlineListener);
    window.addEventListener('offline', offlineListener);

    return () => {
      window.removeEventListener('online', onlineListener);
      window.removeEventListener('offline', offlineListener);
    };
  }, []);
}
