
// Определите начальное состояние, содержащее список пользователей и строку фильтра.
const initialState = {
    users: [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Jane Smith' },
          { id: 3, name: 'Emily Davis' },
          { id: 4, name: 'Michael Brown' },
          { id: 5, name: 'Linda Green' }
        ],
        filter:"",
}



const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FILTER":
             // Возвращаем новое состояние с обновлённым фильтром
             return{
                ...state,
                filter: action.payload // Изменяем только значение фильтра
             };
default:
    return state; // По умолчанию возвращаем текущее состояние
    }
};

export default usersReduser;