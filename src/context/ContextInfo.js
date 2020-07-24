import React, {Component} from 'react'
import { menuData } from "./menuData";
import { socialData } from "./socialData";
const ProductCtx = React.createContext();

class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 1,
        links : menuData,
        socialIcons: socialData,
        cart: []
      };
      // handle sidebar section
      handleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
      };
      // hanldle sart
      handleCart = () => {
        this.setState({ cartOpen: !this.state.cartOpen });
      };
      //close cart
      closeCart = () => {
        this.setState({ cartOpen: false });
      };
      // open
      openCart = () => {
        this.setState({ cartOpen: true });
      };

    render() {
        return (
            <ProductCtx.Provider
              value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart
              }}
            >
              {this.props.children}
            </ProductCtx.Provider>
          );
    }
  }
  
  const ProductConsumer = ProductCtx.Consumer;
  
 export { ProductProvider, ProductConsumer };
  