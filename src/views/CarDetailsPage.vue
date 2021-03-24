<template>
  <div class="shopping-cart-container m-4 p-3 card shadow">
    <h1 class="shopping-cart-title">Your Cart</h1>

    <div v-if="getCartsLength" class="shopping-cart">
      <div class="card-body">
        <div class="column-labels">
          <label class="product-image">Image</label>
          <label class="product-details">Product</label>
          <label class="product-price">Price</label>
          <label class="product-quantity">Quantity</label>
          <label class="product-removal">Remove</label>
          <label class="product-line-price">Total</label>
        </div>

        <div class="product" v-for="cart in carts" :key="cart.id">
          <div class="product-image">
            <img :src="cart.image" :alt="cart.title" />
          </div>
          <div class="product-details">
            <div class="product-title">{{ cart.title }}</div>
            <p class="product-description">
              {{ cart.description }}
            </p>
          </div>
          <div class="product-price">{{ cart.price }}</div>
          <div class="product-quantity">
            <input type="number" :value="cart.quantity" min="1" />
          </div>
          <div class="product-removal">
            <button class="remove-product">Remove</button>
          </div>
          <div class="product-line-price">{{ cart.price * cart.quantity }}</div>
        </div>

        <!-- <div class="product">
          <div class="product-image">
            <img
              src="https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png"
            />
          </div>
          <div class="product-details">
            <div class="product-title">Nutro™ Adult Lamb and Rice Dog Food</div>
            <p class="product-description">
              Who doesn't like lamb and rice? We've all hit the halal cart at
              3am while quasi-blackout after a night of binge drinking in
              Manhattan. Now it's your dog's turn!
            </p>
          </div>
          <div class="product-price">45.99</div>
          <div class="product-quantity">
            <input type="number" value="1" min="1" />
          </div>
          <div class="product-removal">
            <button class="remove-product">Remove</button>
          </div>
          <div class="product-line-price">45.99</div>
        </div> -->

        <div class="totals">
          <div class="totals-item">
            <label>Subtotal</label>
            <div class="totals-value" id="cart-subtotal">
              {{ getTotalCartPrice.toFixed(2) }}
            </div>
          </div>
          <div class="totals-item">
            <label>Tax (5%)</label>
            <div class="totals-value" id="cart-tax">
              {{ (0.05 * getTotalCartPrice).toFixed(2) }}
            </div>
          </div>
          <div class="totals-item">
            <label>Shipping</label>
            <div class="totals-value" id="cart-shipping">15.00</div>
          </div>
          <div class="totals-item totals-item-total">
            <label>Grand Total</label>
            <div class="totals-value" id="cart-total">
              {{
                Math.floor(getTotalCartPrice + 0.05 * getTotalCartPrice) + 15
              }}
            </div>
          </div>
        </div>

        <button class="checkout">Checkout</button>
      </div>
    </div>
    <div v-else>
      <div>
        <h6 className="mt-2 text-center">
          Your cart is now empty <span role="img">😒</span
          ><small className="pointer text-info"
            ><router-link to="/">Shopping?</router-link></small
          >
        </h6>
        <img
          className="empty-cart-img"
          src="https://www.pngitem.com/pimgs/m/480-4803503_your-cart-is-currently-empty-empty-cart-icon.png"
          alt="empty cart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["carts"]),
    ...mapGetters(["getTotalCartPrice", "getCartsLength"]),
  },
};
</script>

<style scoped>
.shopping-cart-container {
  margin-top: 70px !important;
}
.shopping-cart-title {
  font-size: 20px;
  font-weight: bold;
}
.empty-cart-img{
  width: 400px;
  height:65vh;
}

.product-image {
  float: left;
  width: 20%;
}

.product-details {
  float: left;
  width: 37%;
}

.product-price {
  float: left;
  width: 12%;
}

.product-quantity {
  float: left;
  width: 10%;
}

.product-removal {
  float: left;
  width: 9%;
}

.product-line-price {
  float: left;
  width: 12%;
  text-align: right;
}

/* This is used as the traditional .clearfix class */
.group:before,
.shopping-cart:before,
.column-labels:before,
.product:before,
.totals-item:before,
.group:after,
.shopping-cart:after,
.column-labels:after,
.product:after,
.totals-item:after {
  content: "";
  display: table;
}

.group:after,
.shopping-cart:after,
.column-labels:after,
.product:after,
.totals-item:after {
  clear: both;
}

.group,
.shopping-cart,
.column-labels,
.product,
.totals-item {
  zoom: 1;
}

/* Apply clearfix in a few places */
/* Apply dollar signs */
.product .product-price:before,
.product .product-line-price:before,
.totals-value:before {
  content: "$";
}

/* Column headers */
.column-labels label {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.column-labels .product-image,
.column-labels .product-details,
.column-labels .product-removal {
  text-indent: -9999px;
}

/* Product entries */
.product {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.product .product-image {
  text-align: center;
}

.product .product-image img {
  width: 100px;
}

.product .product-details .product-title {
  margin-right: 20px;
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
}

.product .product-details .product-description {
  margin: 5px 20px 5px 0;
  line-height: 1.4em;
}

.product .product-quantity input {
  width: 40px;
}

.product .remove-product {
  border: 0;
  padding: 4px 8px;
  background-color: #c66;
  color: #fff;
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
  font-size: 12px;
  border-radius: 3px;
}

.product .remove-product:hover {
  background-color: #a44;
}

/* Totals section */
.totals .totals-item {
  float: right;
  clear: both;
  width: 100%;
  margin-bottom: 10px;
}

.totals .totals-item label {
  float: left;
  clear: both;
  width: 79%;
  text-align: right;
}

.totals .totals-item .totals-value {
  float: right;
  width: 21%;
  text-align: right;
}

.totals .totals-item-total {
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium";
}

.checkout {
  float: right;
  border: 0;
  margin-top: 20px;
  padding: 6px 25px;
  background-color: #6b6;
  color: #fff;
  font-size: 25px;
  border-radius: 3px;
}

.checkout:hover {
  background-color: #494;
}

/* Make adjustments for tablet */
@media screen and (max-width: 650px) {
  .shopping-cart {
    margin: 0;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }
  .column-labels {
    display: none;
  }
  .product-image {
    float: right;
    width: auto;
  }
  .product-image img {
    margin: 0 0 10px 10px;
  }
  .product-details {
    float: none;
    margin-bottom: 10px;
    width: auto;
  }
  .product-price {
    clear: both;
    width: 70px;
  }
  .product-quantity {
    width: 100px;
  }
  .product-quantity input {
    margin-left: 20px;
  }
  .product-quantity:before {
    content: "x";
  }
  .product-removal {
    width: auto;
  }
  .product-line-price {
    float: right;
    width: 70px;
  }
}

/* Make more adjustments for phone */
@media screen and (max-width: 350px) {
  .product-removal {
    float: right;
  }
  .product-line-price {
    float: right;
    clear: left;
    width: auto;
    margin-top: 10px;
  }
  .product .product-line-price:before {
    content: "Item Total: $";
  }
  .totals .totals-item label {
    width: 60%;
  }
  .totals .totals-item .totals-value {
    width: 40%;
  }
}
</style>
