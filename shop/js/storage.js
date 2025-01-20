export const useStorage = () => {
    function getData(dataType) {
        const data = localStorage.getItem(dataType);
        if (data) {
            try {
                return JSON.parse(data);
            } catch (error) {
                console.error(
                    `Ошибка парсинга данных из localStorage для ключа ${dataType}:`,
                    error
                );
                return null;
            }
        }
        return null;
    }

    function setData(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(
                `Ошибка сохранения данных в localStorage для ключа ${key}:`,
                error
            );
        }
    }

    return {
        getData,
        setData,
    };
};
