import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import ToastContainer from 'src/components/toast/ToastContainer';
import { RecoilRoot } from 'recoil';

// import Button from 'src/components/Button';

// Lấy showToast
// import { showToast } from 'src/utils/showToast';

// Lấy atom toasts 
// import { toasts } from "src/recoils/toasts"
// import { useSetRecoilState } from "recoil"

function MyApp({ Component, pageProps }) {
  // Lấy hàm setState
  // const setToast = useSetRecoilState(toasts)

  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <ToastContainer />
      {/* Truyền showToast 5 tham số type, title, message, thời gian toast, hàm setToast lấy ở trên */}
      {/* <Button onClick={() => showToast('success', 'title', 'message', 3000, setToast)}>Add toast</Button> */}
    </RecoilRoot>
  );
}

export default MyApp;
