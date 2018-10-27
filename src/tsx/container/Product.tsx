import * as React from "react";
import {map} from 'ramda';
import "./Product.scss"
import STRING from '../../asset/string'
import ImageBox from "../components/ImageBox"

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
                            PRODUCT
                        </div>
                        <div className="section_content">
                            {map(x => <ImageBox img={x.img} title={x.title} text={x.text} url={x.url} />, STRING.product)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
