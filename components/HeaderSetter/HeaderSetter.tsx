import { useEffect, useState } from 'react';

export default function HeaderSetter() {

  const [timeoutId, setTimeoutId] = useState(null);

  const getClosestHeaderId = (element: Element) => {
    let parent = element.closest('table');
    if (!parent) return null;
    if (!parent.previousElementSibling) return null;
    return parent.previousElementSibling.id;
  }

  const setHeaderId = (header: string) => {

    if (header === undefined) return;
    if (window.location.hash.split('#')[1] !== header) {
      const params = new URLSearchParams(window.location.search);
      let urlString = params.toString();
      if (urlString.length > 0) urlString = `?${urlString}`;
      urlString += `#${header}`
      window.history.pushState(null, '', urlString);
    }

  };

  const handleScroll = () => {

    if (timeoutId !== null) return;

    setTimeoutId(setTimeout(() => {

      const viewportCenterTop = window.innerHeight / 2;
      const viewportCenterLeft = window.innerWidth / 2;

      const element = document.elementFromPoint(viewportCenterLeft, viewportCenterTop);
      const header = getClosestHeaderId(element);

      if (header) setHeaderId(header);

      setTimeoutId(null);
    }, 100));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return <></>;
}