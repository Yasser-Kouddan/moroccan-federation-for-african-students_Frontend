const storeJsonData = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };
  
const getJsonData = async (key) => {
        const jsonValue = localStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    };

const deleteJsonData = (key) => {
        localStorage.removeItem(key);
    };

export { storeJsonData, getJsonData, deleteJsonData}