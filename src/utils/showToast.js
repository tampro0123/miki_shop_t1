import { v4 as uuidv4 } from 'uuid';

export const showToast = (type = 'success', title = 'title', message = 'message', duration = 3000, setToast) => {
    const id = uuidv4()
    const toast = { id, type, title, message }
    setToast((prev) => [
        ...prev,
        toast
    ])
    setTimeout(() => setToast((prev) => prev.filter((item) => item.id !== id)), duration)
}