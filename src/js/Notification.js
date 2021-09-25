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

  constructor(type, price) {
    

    this._type = type
    this._price = price

    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
    document.querySelector(".notifications").appendChild(this.container);

  }

   deleteNotif(){
      document.querySelector(".notifications").removeChild(this.container);
   }

  render() {
    const template = `
                      <div class="notification ${classNames}">
                        <button class="delete"></button>
                        🍕 <span class="type">${this._type}</span> (<span class="price">${formatCurrency(this._price)}</span>) has been added to your order.
                      </div>
                          `;

    this.container.innerHTML = template;
    this.container.addEventListener("click", () => {
      this.deleteNotif()
    });
  }
}
