import "@/styles/index.scss"; // Import your global SCSS file
import {
  useEffect
} from "react";

export default function App({
  Component,
  pageProps
}) {
  useEffect(() => {
    function setViewportWidth() {
      document.documentElement.style.setProperty(
        "--viewport-width",
        window.innerWidth
      );
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        window.innerWidth - document.documentElement.clientWidth
      );
    }

    setViewportWidth();
    window.addEventListener("resize", setViewportWidth);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", setViewportWidth);
    };
  }, []);

  return <Component {
    ...pageProps
  }
  />;
}