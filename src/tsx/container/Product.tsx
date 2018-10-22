import * as React from "react";
import "./Product.scss";

export interface ProductProps {
}
export interface ProductState {
}

export default class Product extends React.Component<ProductProps, ProductState> {
    render() {
        return (
            <div id="product">
                <div id="product_backgroud">
                    <div id="product_frame">
                        <div className="section_title">
                            Product
                        </div>
                        <div className="section_content">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
