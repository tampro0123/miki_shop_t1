const useLocalStorage = (name = "", param = "", option = "get") => {
    if (typeof window !== "undefined") {
        const result = JSON.parse(localStorage.getItem(name));
        if (!result) {
            return null;
        }

        if (param) {
            return result[`${param}`];
        }

        return result;
    }
};

export default useLocalStorage;