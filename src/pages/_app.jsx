import "../styles/index.scss";
import "public/assets/css/mystyle.css";
import { GlobalContextProvider } from "../components/contexts/GlobalContext";

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
    return (
        <GlobalContextProvider>
            <Component {...pageProps} />
        </GlobalContextProvider>
    );
}
