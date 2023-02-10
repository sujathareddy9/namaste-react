import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store.js";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import  RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MENU_DATA);
        },
    });
});

test("Add Items to Cart", async() => { 
   const body = render(
    <StaticRouter>
        <Provider store={store}>
        <RestaurantMenu />
        </Provider>
        </StaticRouter>
   );
        await waitFor(() => expect(body.getByTestId("menu")));
        const menu = body.getByTestId("menu");
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