import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import 'react-phone-input-2/lib/style.css';
import Whatsapp from "./components/Whatsapp";
import './index.css';


function App() {
  return (
    <>
      <Toaster />
      <Whatsapp />
      <AppRoutes />
    </>
  );
}

export default App;
