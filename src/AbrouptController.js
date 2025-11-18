import { useEffect, useState } from 'react';

export default function User({ id }) {
  const [user, setUser] = useState(null);
  const controller = new AbortController();

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch(`https://dummyjson.com/test`, {
          signal: controller.signal,
        });

        const data = await res.json();
        setUser(data);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Request aborted');
          return; // ignore aborted request
        }
        console.error(err);
      }
    }

    loadUser();

    // Cleanup: cancel previous request when id changes or component unmounts
    return () => controller.abort();
  }, [id]);

  console.log(controller);
  console.log(controller.signal);

  return (
    <div>
      {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}
