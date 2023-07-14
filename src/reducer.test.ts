import {reducer, StateType, TOGGLE_CONSTANT} from "./Reducer";

test("reducer should change value to opposite value", () => {
    const state: StateType = {collapsed:false}
    const newState = reducer(state, { type: TOGGLE_CONSTANT });
    expect(newState.collapsed).toBe(true);
});
test(("reducer should throw error because action type is incorrect"),()=>{
    const state: StateType = {collapsed:false}
    expect(()=>reducer(state,{type:"FAKE-ACTION"})).toThrowError();
})