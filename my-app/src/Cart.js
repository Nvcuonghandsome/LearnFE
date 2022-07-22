function Cart() {
    return (
        <div>
            <section id="cart_items">
                <div classname="container">
                    <div classname="breadcrumbs">
                        <ol classname="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li classname="active">Shopping Cart</li>
                        </ol>
                    </div>
                    <div classname="table-responsive cart_info">
                        <table classname="table table-condensed">
                            <thead>
                                <tr classname="cart_menu">
                                    <td classname="image">Item</td>
                                    <td classname="description">
                                    </td><td classname="price">Price</td>
                                    <td classname="quantity">Quantity</td>
                                    <td classname="total">Total</td>
                                    <td>
                                    </td></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="cart_product">
                                        <a href><img src="images/cart/one.png" alt="" /></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href>Colorblock Scuba</a></h4>
                                        <p>Web ID: 1089772</p>
                                    </td>
                                    <td className="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href> + </a>
                                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                            <a className="cart_quantity_down" href> - </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cart_product">
                                        <a href><img src="images/cart/two.png" alt="" /></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href>Colorblock Scuba</a></h4>
                                        <p>Web ID: 1089772</p>
                                    </td>
                                    <td className="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href> + </a>
                                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                            <a className="cart_quantity_down" href> - </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cart_product">
                                        <a href><img src="images/cart/three.png" alt="" /></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href>Colorblock Scuba</a></h4>
                                        <p>Web ID: 1089772</p>
                                    </td>
                                    <td className="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href> + </a>
                                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                            <a className="cart_quantity_down" href> - </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id="do_action">
                <div classname="container">
                    <div classname="heading">
                        <h3>What would you like to do next?</h3>
                        <p>Choose if you have a discount code or reward points you want to use or would like to estimate your
                            delivery cost.</p>
                    </div>
                    <div classname="row">
                        <div classname="col-sm-6">
                            <div classname="chose_area">
                                <ul classname="user_option">
                                    <li>
                                        <input type="checkbox" />
                                        <label>Use Coupon Code</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label>Use Gift Voucher</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label>Estimate Shipping &amp; Taxes</label>
                                    </li>
                                </ul>
                                <ul classname="user_info">
                                    <li classname="single_field">
                                        <label>Country:</label>
                                        <select>
                                            <option>United States</option>
                                            <option>Bangladesh</option>
                                            <option>UK</option>
                                            <option>India</option>
                                            <option>Pakistan</option>
                                            <option>Ucrane</option>
                                            <option>Canada</option>
                                            <option>Dubai</option>
                                        </select>
                                    </li>
                                    <li classname="single_field">
                                        <label>Region / State:</label>
                                        <select>
                                            <option>Select</option>
                                            <option>Dhaka</option>
                                            <option>London</option>
                                            <option>Dillih</option>
                                            <option>Lahore</option>
                                            <option>Alaska</option>
                                            <option>Canada</option>
                                            <option>Dubai</option>
                                        </select>
                                    </li>
                                    <li classname="single_field zip-field">
                                        <label>Zip Code:</label>
                                        <input type="text" />
                                    </li>
                                </ul>
                                <a classname="btn btn-default update" href>Get Quotes</a>
                                <a classname="btn btn-default check_out" href>Continue</a>
                            </div>
                        </div>
                        <div classname="col-sm-6">
                            <div classname="total_area">
                                <ul>
                                    <li>Cart Sub Total <span>$59</span></li>
                                    <li>Eco Tax <span>$2</span></li>
                                    <li>Shipping Cost <span>Free</span></li>
                                    <li>Total <span>$61</span></li>
                                </ul>
                                <a classname="btn btn-default update" href>Update</a>
                                <a classname="btn btn-default check_out" href>Check Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cart