import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA);
        },
    });
});
 test("Shimmer Should Load on Homepage",() => {
  
});
test("Restaurants Should Load on Homepage", async() => {
});
test("Search for string(food)  on Homepage", async() => {
   const body = render(
    <StaticRouter>
        <Provider store={store}>
        <Body/>
        </Provider>
        </StaticRouter>
   );
        await waitFor(() => expect(screen.getByTestId("search-btn")));
        const input = body.getByTestId("search-input");
        fireEvent.change(input, { 
            targer: {
            value: "food"
        },
    });
        const searchBtn = body.getByTestId("search-btn");
         fireEvent.click(searchBtn);
        expect(restList.children.length).toBe(4);
        console.log(Shimmer);
     
});