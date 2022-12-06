1. Обернуть в провайдер дом

   <Provider store={store}>
   <App />
   </Provider>

2. Создать компонент корень редюсеров:

   const rootReducer = combineReducers({
   toolkit: toolkitReduser,
   });

   export const store = configureStore({
   reducer: rootReducer,
   });

3. Создать редюсер:

   3.1. Создание и экспорт с помощью createReducer:

   export default createReducer(initialState, {
   [increment]: (state) => {
   state.count = state.count + 1;
   },
   [decrement]: (state) => {
   state.count = state.count - 1;
   },
   }

   3.2 Создание переменных createAction:

   export const increment = createAction("INCREMENT");
   export const decrement = createAction("DECCREMENT");

   3.3 Создание initialState:

   const initialState = {
   count: 0,
   todos: ["первое", "второе", "третье"],
   }

4. Вызов стейта и его изменение с помощью useSelector и диспетчера:

   const count = useSelector((state) => state.toolkit.count);
   const dispatch = useDispatch();

5. Добавление слушателей к элементам и редюсера к ним:

<h1>Счетчик {count}</h1>
      <button onClick={() => dispatch(increment())}>Инкремент</button>
      <button onClick={() => dispatch(decrement())}>Декремент</button>
