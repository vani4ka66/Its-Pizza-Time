import {formatCurrency} from './utils'
import classNames from "classnames";


export default class Notification {
  static get types() {

    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");

  }

   deleteNotif(){

   }

  render() {
    const template = `
                      <div class="notification ${classNames}">
                        <button class="delete"></button>
                        🍕 <span class="type">${this._type}</span> (<span class="price">${this._price} ${formatCurrency}</span>) has been added to your order.
                      </div>
                          `;

    this.container.innerHTML = template;
  }
}
