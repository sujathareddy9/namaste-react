import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider }from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
    // Load Header
   const header = render(
    <StaticRouter>
   <Provider store={store}>
    <Header />
   </Provider>
   </StaticRouter>
   );
   const Logo = header.getAllByTestId("Logo");
      console.log(Logo[0]);
      expect(Logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online Status should be green on rendering header", () => {

   const header = render(
    <StaticRouter>
   <Provider store={store}>
    <Header />
   </Provider>
   </StaticRouter>
   );
   const onlineStatus = header.getByTestId("online-status");
//    console.log(Logo[0]);
   expect(onlineStatus.innerHTML).toBe("✅");
  
//    console.log(header);
    // check if logo is loaded
});
test("Cart should have 0 items on rendering header", () => {
    // Load Header
   const header = render(
    <StaticRouter>
   <Provider store={store}>
    <Header />
   </Provider>
   </StaticRouter>
   );
   const cart = header.getByTestId("cart");
      expect(cart.innerHTML).toBe("Cart- 4 items");
});