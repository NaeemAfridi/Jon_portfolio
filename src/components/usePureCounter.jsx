import { useEffect } from "react";

const usePureCounter = (id, start, end, duration) => {
  useEffect(() => {
    const counterElement = document.getElementById(id);

    if (!counterElement) {
      console.error(`Element with id "${id}" not found.`);
      return;
    }

    const options = {
      start,
      end,
      duration,
    };

    const purecounter = new Purecounter(counterElement, options);

    // Clean up on unmount
    return () => {
      purecounter.destroy();
    };
  }, [id, start, end, duration]);
};

export default usePureCounter;
