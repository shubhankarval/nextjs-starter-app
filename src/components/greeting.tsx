'use client';

import { useEffect, useState } from 'react';
import he from 'he';

type HelloResponse = {
  code: string;
  hello?: string;
};

type IPResponse = {
  ip: string;
};

export function Greeting() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        const params: Record<string, string> = {};
        const langCode = navigator.language;

        if (langCode) {
          params['lang'] = langCode;
        } else {
          const ipRes = await fetch('https://get.geojs.io/v1/ip.json');
          const ipData: IPResponse = await ipRes.json();
          if (ipData.ip) {
            params['ip'] = ipData.ip;
          }
        }

        if (Object.keys(params).length > 0) {
          const res = await fetch(
            `https://hellosalut.stefanbohacek.dev/?${new URLSearchParams(params)}`,
          );
          const data: HelloResponse = await res.json();

          setGreeting(data?.hello ? he.decode(data.hello) + '!' : 'Hello!');
        } else {
          setGreeting('Hello!');
        }
      } catch (error) {
        console.error('Failed to fetch greeting:', error);
        setGreeting('Hello!');
      }
    };

    fetchGreeting();
  }, []);

  return (
    <h1 className="text-foreground text-2xl font-bold">
      {greeting?.length && greeting}
    </h1>
  );
}
