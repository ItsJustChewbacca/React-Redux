const initState = {
  posts: [
   {id: "1", title: "Luke", body: "Programmer"},
   {id: "2", title: "Sarah", body: "Student"},
   {id: "3", title: "Sarbear", body: "MehMehMehMehMeh"}
  ]
}
// Settting up reducer
const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer