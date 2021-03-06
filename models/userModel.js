import AsyncStorage from '@react-native-async-storage/async-storage';

export const user = {

  state: {
    userName: '',
  },

  reducers: {                               
    setName(state, { userName }) {
      console.log(userName)
      return { ...state, userName };
    },
  },

  effects: (dispatch) => ({

    async storeName(payload) {

      const { userName } = payload;

      if (userName !== '') {      //si le nom a été défini

        // ajout du nom dans l'asyncstorage
        await AsyncStorage.setItem('userName', userName);
        
        // ajout du nom dans le state
        const action = {
          type: "user/setName",
          payload: { userName }
        };
        dispatch(action);

      }
    }
  }),
};